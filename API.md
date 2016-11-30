APIs:
=====

College list (GET): API to hit to receive list of colleges. Should
support pagination. Just records. Probable slug: /list?page=**1**

College login (POST): API to allow college administrators to log in.
Should be secure. Once logged in, administrators must be able to edit
data for their own colleges. Probable slug: /admin-login

College update (POST): API to hit when updating data for a college. User
must have college administrator login. Probable slug: /college-update

College deadline (GET): API to get deadlines for a college. Probable
slug: /deadline?name=&lt;college-name&gt;

Student login (POST): API to allow students to login and use the tools. Probable slug: /student-login

Shortlist update (POST): API to allow students to update the list of
shortlisted colleges. Probable slug: /shortlist-update
