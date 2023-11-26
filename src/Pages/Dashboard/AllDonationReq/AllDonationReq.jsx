
import Heading from "../../../Components/Heading";
import useAllRequest from "../../../Hooks/useAllRequest";
import ReqTable from "../Shared/ReqTable";

const AllDonationReq = () => {
    // toto make api to gget all reqs
    const data = useAllRequest()
    console.log(data?.request?.length)
    return (
        <section>
            <Heading>All Blood Donation Requests</Heading>
            <ReqTable data={data}></ReqTable>
        </section>
    );
};

export default AllDonationReq;