export function getContactEmailText(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return `New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Message: ${data.message}

---
Sent from Elevate Contact Form`
}

export function getContactEmailHtml(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <body
    style="background-color:rgb(243,244,246);padding-top:40px;padding-bottom:40px;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="background-color:rgb(255,255,255);border-radius:8px;max-width:600px;margin-left:auto;margin-right:auto;overflow:hidden">
      <tbody>
        <tr style="width:100%">
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="padding-left:32px;padding-right:32px;padding-top:32px;padding-bottom:32px">
              <tbody>
                <tr>
                  <td>
                    <h1
                      style="font-size:28px;font-weight:700;color:rgb(17,24,39);margin-bottom:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
                      New Contact Form Submission
                    </h1>
                    <div style="margin-bottom:24px">
                      <p
                        style="font-size:16px;color:rgb(55,65,81);margin-bottom:16px;line-height:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
                        <strong>Name:</strong> ${data.name}
                      </p>
                      <p
                        style="font-size:16px;color:rgb(55,65,81);margin-bottom:16px;line-height:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
                        <strong>Email:</strong> <a href="mailto:${data.email}" style="color:#067df7;text-decoration-line:none">${data.email}</a>
                      </p>
                      <p
                        style="font-size:16px;color:rgb(55,65,81);margin-bottom:16px;line-height:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
                        <strong>Phone:</strong> ${data.phone || 'Not provided'}
                      </p>
                    </div>
                    <div style="margin-bottom:32px">
                      <h2
                        style="font-size:20px;font-weight:600;color:rgb(17,24,39);margin-bottom:16px;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
                        Message:
                      </h2>
                      <div
                        style="background-color:rgb(249,250,251);padding:20px;border-radius:8px;border-left:4px solid #067df7">
                        <p
                          style="font-size:16px;color:rgb(55,65,81);margin:0;line-height:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;white-space:pre-wrap">
                          ${data.message}
                        </p>
                      </div>
                    </div>
                    <div
                      style="border-top:1px solid rgb(229,231,235);padding-top:24px;margin-top:24px">
                      <p
                        style="font-size:14px;color:rgb(107,114,128);margin:0;line-height:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
                        Sent from Elevate Contact Form
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`
}
