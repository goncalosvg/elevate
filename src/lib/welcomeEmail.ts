export function getWelcomeEmailText(unsubscribeToken?: string) {
  return `Welcome to Elevate — You're on the list

You're now part of an exclusive network of top-tier traders, founders, and analysts shaping the future of crypto.

Reply to this email with any feedback, thoughts, or anything you'd like to share with the founders.

Stay tuned for what's coming.

The Elevate Team

Follow us → https://x.com/elevatet1

To unsubscribe from these emails, visit: https://joinelevate.net/api/unsubscribe?token=${unsubscribeToken || 'your-unsubscribe-token'}`
}

export function getWelcomeEmailHtml(id: string, unsubscribeToken?: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <link
      rel="preload"
      as="image"
      href="https://cdn.joinelevate.net/email-banner.png" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <body
    style="background-color:rgb(243,244,246);padding-top:40px;padding-bottom:40px;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
    <!--$-->
    <div
      style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
      Welcome to Elevate — You're on the list.
      <div>
         ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      </div>
    </div>
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
              style="margin-bottom:0px">
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://joinelevate.net"
                      style="color:#067df7;text-decoration-line:none"
                      target="_blank"
                      ><img
                        alt="Welcome to Elevate - Where the Crypto Elite Connect"
                        src="https://cdn.joinelevate.net/email-banner.png"
                        style="width:100%;height:auto;object-fit:cover;display:block;outline:none;border:none;text-decoration:none"
                    /></a>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="padding-left:32px;padding-right:32px;padding-bottom:32px">
              <tbody>
                <tr>
                  <td>
                    <h1
                      style="font-size:28px;font-weight:700;color:rgb(17,24,39);margin-bottom:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
                      Welcome to Elevate
                    </h1>
                    <p
                      style="font-size:16px;color:rgb(55,65,81);margin-bottom:24px;line-height:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;margin-top:16px">
                      You&#x27;re now part of an exclusive network of top-tier traders, founders, and analysts shaping the future of crypto.
                    </p>
                    <p
                      style="font-size:16px;color:rgb(55,65,81);margin-bottom:24px;line-height:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;margin-top:16px">
                                             Reply to this email with any feedback, thoughts, or anything you&#x27;d like to share with the founders.
                    </p>
                    <p
                      style="font-size:16px;color:rgb(55,65,81);margin-bottom:32px;line-height:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;margin-top:16px">
                      Stay tuned for what&#x27;s coming.<br /><br />The Elevate Team<br />
                    </p>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="margin-bottom:32px">
                      <tbody>
                        <tr>
                          <td>
                            <a
                              href="https://x.com/elevatet1"
                              style="background-color:rgb(0,0,0);color:rgb(255,255,255);padding-left:24px;padding-right:24px;padding-top:12px;padding-bottom:12px;border-radius:9999px;font-size:16px;font-weight:500;text-decoration-line:none;box-sizing:border-box;display:inline-block;line-height:100%;text-decoration:none;max-width:100%;mso-padding-alt:0px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;padding:12px 24px 12px 24px"
                              target="_blank"
                              ><span
                                ><!--[if mso]><i style="mso-font-width:400%;mso-text-raise:18" hidden>&#8202;&#8202;&#8202;</i><![endif]--></span
                              ><span
                                style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px"
                                >Follow us →</span
                              ><span
                                ><!--[if mso]><i style="mso-font-width:400%" hidden>&#8202;&#8202;&#8202;&#8203;</i><![endif]--></span
                              ></a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="border-top-width:1px;border-color:rgb(229,231,235);padding-left:32px;padding-right:32px;padding-top:24px;padding-bottom:24px;text-align:center">
      <tbody>
        <tr>
          <td>
            <p
              style="font-size:14px;color:rgb(75,85,99);margin-bottom:16px;line-height:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;margin-top:16px">
              <a
                href="https://x.com/elevatet1"
                style="display:inline-block;background-color:rgb(229,231,235);color:rgb(0,0,0);width:32px;height:32px;border-radius:9999px;font-size:16px;text-decoration-line:none;text-align:center;line-height:32px;font-family:-apple-system,BlinkMacSystemFont,sans-serif"
                target="_blank"
                >𝕏</a
              >
            </p>
            <p
              style="font-size:12px;color:rgb(107,114,128);margin-bottom:0px;margin:0px;line-height:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;margin-top:0px;margin-left:0px;margin-right:0px">
              ©
              <!-- -->2025<!-- -->
              Elevate. All rights reserved.
            </p>
            <p
              style="font-size:12px;color:rgb(107,114,128);margin:0px;line-height:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;margin-bottom:0px;margin-top:0px;margin-left:0px;margin-right:0px">
              <a
                href="https://joinelevate.net/api/unsubscribe?token=${unsubscribeToken || id}"
                style="text-decoration-line:underline;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-weight:500"
                target="_blank"
                >Unsubscribe</a
              >
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <!--7--><!--/$-->
  </body>
</html>
`
} 