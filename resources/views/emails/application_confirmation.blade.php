<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Application Received</title>
</head>
<body style="margin:0; padding:0; background-color:#F8FAFC; font-family: Arial, sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8FAFC; padding:40px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">

    <!-- Header -->
    <tr>
        <td align="center" style="padding:30px;">
            <img src="https://nextgenstarters.com/img/nextgen_starters_logo.png" width="80" alt="NextGen Starters Logo">
        </td>
    </tr>

    <!-- Orange Divider -->
    <tr>
        <td style="height:4px; background-color:#F97316;"></td>
    </tr>

    <!-- Body -->
    <tr>
        <td style="padding:40px; color:#1E293B;">

            <h2 style="margin-top:0; color:#1E293B;">Application Received 🚀</h2>

            <p>Hello <strong>{{ $application->name }}</strong>,</p>

            <p>
                Thank you for applying to <strong>NextGen Starters</strong>.
            </p>

            <p>
                We have successfully received your application for:
            </p>

            <div style="background:#FFF7ED; padding:15px; border-left:4px solid #F97316; margin:20px 0; font-weight:bold;">
                {{ $application->program }}
            </div>

            <p>
                This is a selective cohort-based program focused on building real AI tools for real businesses.
            </p>

            <p>
                Our admissions team will carefully review your application.
                <strong>Shortlisted applicants will be contacted for the next stage.</strong>
            </p>

            <h3 style="margin-top:30px;">What Happens Next?</h3>

            <ul style="padding-left:20px;">
                <li>Application Review</li>
                <li>Shortlisting</li>
                <li>Next-Stage Communication</li>
            </ul>

            <p style="margin-top:30px;">
                Stay ready. Big things ahead 🚀
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