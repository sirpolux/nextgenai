<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Application Submitted</title>
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

    <tr>
        <td style="height:4px; background-color:#F97316;"></td>
    </tr>

    <tr>
        <td style="padding:40px; color:#1E293B;">

            <h2 style="margin-top:0;">New Application Submitted</h2>

            <div style="margin-top:20px;">

                <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
                    <tr>
                        <td style="background:#F8FAFC;"><strong>Name</strong></td>
                        <td>{{ $application->name }}</td>
                    </tr>
                    <tr>
                        <td style="background:#F8FAFC;"><strong>Email</strong></td>
                        <td>{{ $application->email }}</td>
                    </tr>
                    <tr>
                        <td style="background:#F8FAFC;"><strong>Phone</strong></td>
                        <td>{{ $application->phone }}</td>
                    </tr>
                    <tr>
                        <td style="background:#F8FAFC;"><strong>Location</strong></td>
                        <td>{{ $application->location }}</td>
                    </tr>
                    <tr>
                        <td style="background:#F8FAFC;"><strong>Program</strong></td>
                        <td>{{ $application->program }}</td>
                    </tr>
                    <tr>
                        <td style="background:#F8FAFC;"><strong>Tech Level</strong></td>
                        <td>{{ $application->tech_level }}</td>
                    </tr>
                    <tr>
                        <td style="background:#F8FAFC;"><strong>Laptop & Internet</strong></td>
                        <td>{{ $application->has_laptop }}</td>
                    </tr>
                    <tr>
                        <td style="background:#F8FAFC;"><strong>Commitment</strong></td>
                        <td>{{ $application->can_commit }}</td>
                    </tr>
                    <tr>
                        <td style="background:#F8FAFC;"><strong>Tuition</strong></td>
                        <td>{{ $application->tuition_ready }}</td>
                    </tr>
                    <tr>
                        <td style="background:#F8FAFC;"><strong>Referral</strong></td>
                        <td>{{ $application->referral_source }}</td>
                    </tr>
                    <tr>
                        <td style="background:#F8FAFC;"><strong>Reason for Applying</strong></td>
                        <td>{{ $application->reason_for_applying }}</td>
                </table>

            </div>

        </td>
    </tr>

    <tr>
        <td style="background:#F1F5F9; padding:20px; text-align:center; font-size:12px; color:#64748B;">
            Application ID: #{{ $application->id }} <br>
            Submitted: {{ $application->created_at }}
        </td>
    </tr>

</table>

</td>
</tr>
</table>

</body>
</html>