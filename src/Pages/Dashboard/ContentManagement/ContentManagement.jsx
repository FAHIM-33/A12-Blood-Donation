import { Link } from "react-router-dom";
import Heading from "../../../Components/Heading";

const ContentManagement = () => {
    return (
        <section>
            <Heading>Content Management</Heading>
            <div className="flex justify-end">
                <Link to='/dashboard/content-management/add-blog'>
                    <button className="mr-4 btn border-2 border-high rounded-md px-2 py-1">+ Add blog</button>
                </Link>
            </div>
        

        </section>
    );
};

export default ContentManagement;