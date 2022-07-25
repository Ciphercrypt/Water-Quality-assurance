// const QRCode = require('qrcode')
// // import QRCode from 'qrcode';
 
// // Creating the data
// let data = {
//     name:"Employee Name",
//     age:27,
//     department:"Police",
//     id:"aisuoiqu3234738jdhf100223"
// }
 
// // Converting the data into String format
// let stringdata = JSON.stringify(data)
 
// // Print the QR code to terminal
// QRCode.toString(stringdata,{type:'terminal'},
//                     function (err, QRcode) {
 
//     if(err) return console.log("error occurred")
 
//     // Printing the generated code
//     console.log(QRcode)
// })
   
// // Converting the data into base64
// QRCode.toDataURL(stringdata, function (err, code) {
//     if(err) return console.log("error occurred")
 
//     // Printing the code
//     console.log(code)
// })

import QRCode from 'qrcode'
import { useState } from 'react'

function QRCodeGenerator() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button>
            <br/>
            {/* {
                qr != '' ? <img src={qr} /> : ''
            } */}
			{qr && <>
				<div>
                    <img src={qr} sx={{width:1/2}}/>
                </div>
                
				<a href={qr} download="qrcode.png">Download</a>
			</>}
		</div>
	)
}

export default QRCodeGenerator;