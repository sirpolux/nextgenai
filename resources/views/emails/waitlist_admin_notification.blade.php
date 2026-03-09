<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Waitlist Signup</title>
</head>

<body style="margin:0; padding:0; background:#F8FAFC; font-family:Arial, sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">

<tr>
<td align="center" style="padding:30px;">
<img src="https://nextgenstarters.com/img/nextgen_starters_logo.png" width="80">
</td>
</tr>

<tr>
<td style="height:4px; background:#F97316;"></td>
</tr>

<tr>
<td style="padding:40px; color:#1E293B;">

<h2 style="margin-top:0;">New Waitlist Signup 🚀</h2>

<p>A new user has joined the NextGen waitlist.</p>

<div style="background:#F1F5F9; padding:20px; border-radius:8px; margin-top:20px;">

<p><strong>Name:</strong> {{ $waitlist->name }}</p>

<p><strong>Email:</strong> {{ $waitlist->email }}</p>

<p><strong>Phone:</strong> {{ $waitlist->phone ?? 'Not provided' }}</p>

<p><strong>Program:</strong> {{ ucfirst(str_replace('-', ' ', $waitlist->program)) }}</p>

<p><strong>Experience Level:</strong> {{ $waitlist->experience_level ?? 'Not specified' }}</p>

@if($waitlist->message)
<p><strong>Message:</strong></p>
<p style="background:#FFF7ED; padding:12px; border-left:4px solid #F97316;">
{{ $waitlist->message }}
</p>
@endif

</div>

<p style="margin-top:30px;">
You can follow up or track this lead in the database.
</p>

<p style="margin-top:30px;">
— NextGen System
</p>

</td>
</tr>

<tr>
<td style="background:#F1F5F9; padding:20px; text-align:center; font-size:12px; color:#64748B;">
© {{ date('Y') }} NextGen Starters
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>