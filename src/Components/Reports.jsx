import ReportForm from "./Home/Sections/ReportForm";

function Reports() {
    return (
        <div>
            <section className="main-billfrm cmnmenu-topmargin reports-form">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="row fully-bxn no-gutters">
                                <div className="col-lg-6">
                                    <div className="dhoni-bgm">
                                        <div className="common-heading">
                                            <h2>
                                                Access your test
                                                <span> reports online any time, any ANY TIME, ANY WHERE FROM ANY DEVICE</span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cir-frm">
                                        <ReportForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Reports