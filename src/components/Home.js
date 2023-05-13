import { CCard, CCardBody, CCardTitle, CCardText, CCardImage,CCol,CRow } from "@coreui/react";

function Home() {
    return (
        <div style={{ padding: "40px" }}>
            <CCard className="mb-3" >
                <CRow className="g-0">
                    <CCol md={4}>
                        <CCardImage src={"https://149440935.v2.pressablecdn.com/wp-content/uploads/2018/08/business-consultation-1000x667.jpg"} />
                    </CCol>
                    <CCol md={8}>
                        <CCardBody>
                            <CCardTitle>Card title</CCardTitle>
                            <CCardText>
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </CCardText>
                            <CCardText>
                                <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                            </CCardText>
                        </CCardBody>
                    </CCol>
                </CRow>
            </CCard>
        </div>
    )
}
export default Home;
