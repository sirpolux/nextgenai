<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>You're on the NextGen Waitlist</title>
</head>

<body style="margin:0; padding:0; background-color:#F8FAFC; font-family: Arial, sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8FAFC; padding:40px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">

    <!-- Logo -->
    <tr>
        <td align="center" style="padding:30px;">
            <img src="https://nextgenstarters.com/img/nextgen_starters_logo.png" width="90" alt="NextGen Starters Logo">
        </td>
    </tr>

    <!-- Orange Divider -->
    <tr>
        <td style="height:4px; background-color:#F97316;"></td>
    </tr>

    <!-- Body -->
    <tr>
        <td style="padding:40px; color:#1E293B;">

            <h2 style="margin-top:0; color:#1E293B;">
                You're on the Waitlist 🎉
            </h2>

            <p>
                Hello <strong>{{ $waitlist->name }}</strong>,
            </p>

            <p>
                You've successfully joined the waitlist for the program below:
            </p>

            <!-- Program Box -->
            <div style="background:#FFF7ED; padding:16px; border-left:4px solid #F97316; margin:20px 0; font-weight:bold;">
                {{ ucfirst(str_replace('-', ' ', $waitlist->program)) }}
            </div>

            <p>
                When enrollment opens, you will receive <strong>priority access before the public launch</strong>.
            </p>

            <!-- Benefits -->
            <h3 style="margin-top:30px;">As a Waitlist Member, You Get:</h3>

            <ul style="padding-left:20px; line-height:1.8;">
                <li>Priority admission before public enrollment</li>
                <li>Early-bird tuition discounts</li>
                <li>Access to a free preparation workshop</li>
                <li>Exclusive updates about the upcoming cohort</li>
            </ul>

            <p style="margin-top:25px;">
                We will notify you as soon as applications open.
            </p>

            <!-- WhatsApp Section -->
            <div style="background:#F1F5F9; padding:20px; border-radius:8px; margin-top:30px; text-align:center;">

                <p style="margin-top:0;">
                    Want early updates and insider tips?
                </p>

                <p style="font-weight:bold;">
                    Join our WhatsApp community
                </p>

                <a href="https://wa.me/2347045130608"
                   style="display:inline-block;
                          background:#22C55E;
                          color:#ffffff;
                          padding:12px 24px;
                          text-decoration:none;
                          border-radius:6px;
                          font-weight:bold;
                          margin-top:10px;">
                    Join WhatsApp Group
                </a>

            </div>

            <p style="margin-top:35px;">
                Stay ready — exciting opportunities ahead 🚀
            </p>

            <p style="margin-top:40px;">
                — The NextGen Starters Team
            </p>

        </td>
    </tr>

    <!-- Footer -->
    <tr>
        <td style="background:#F1F5F9; padding:20px; text-align:center; font-size:12px; color:#64748B;">
            © {{ date('Y') }} NextGen Starters. All rights reserved.
        </td>
    </tr>

</table>

</td>
</tr>
</table>

</body>
</html>