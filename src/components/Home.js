import { CCard ,CCardBody, CCardTitle, CCardText, CCardImage } from "@coreui/react";

function Home() {
    return (
        <div>
            <CCard className="mb-3">
                <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
                    <CCardText><small className="text-medium-emphasis">Last updated 3 mins ago</small></CCardText>
                </CCardBody>
                <CCardImage orientation="bottom" src={'https://www.cgi.com/sites/default/files/business_consulting_4_-_management_consulting.jpg'} />
            </CCard>
        </div>
    )
}
export default Home;
