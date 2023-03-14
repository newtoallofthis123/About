import QRCode from "react-qr-code";
import { useState } from "react";

const Qr = () => {
    const [qr, setQr] = useState("");
    const handleChange = (e) => {
        setQr(e.target.value)
    }
    return (
        <div>
            <h1 className="text">QR Code Generator</h1>
            <p className="center text">
                Enter the text you want to convert to a QR Code in the box below.
            </p>
            <p className="center text">Enter Text for a <i className="bi bi-qr-code"></i></p>
            <div>
                <div className="qr" style={{ textAlign: "center" }}>
                    <input type="text" onChange={handleChange} value={qr} name="qr" id="qrcode" />
                </div>
                <div className="center" style={{ padding: "2rem 0"}}>
                    <QRCode
                        size={256}
                        style={{ height: "auto", width: "256" }}
                        value={qr}
                        bgColor={"#f0f0f0"}
                        fgColor={"#212121"}
                        viewBox={`0 0 256 256`}
                    />
                </div>
            </div>
        </div>
    )
}

export default Qr