import { Helmet } from "react-helmet";
import Heading from "../../../Components/Heading";
import useUserAllReq from "../../../Hooks/useUserAllReq";

import ReqTable from "../Shared/ReqTable";

const MyDonReq = () => {
    const data = useUserAllReq()


    return (
        <section>
            <Helmet><title>My requests</title></Helmet>
            <Heading>All requests:</Heading>
            <ReqTable data={data}></ReqTable>
        </section>
        
    );
};

export default MyDonReq;