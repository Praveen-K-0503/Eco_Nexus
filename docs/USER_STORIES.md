# User Stories

Stories are grouped by epic. Format: "As a [role], I want to [action] so that [benefit]."

---

## Epic 1: Authentication & Account Management

1. As a business owner, I want to register an account so that I can access the marketplace.
   - **AC:** Email + password + company name required; email uniqueness validated; verification email sent.
2. As a user, I want to log in with my email and password so that I can access my account.
   - **AC:** Returns JWT on success; invalid credentials return 401 with generic message.
3. As a user, I want to stay logged in across browser sessions so that I don't have to log in every day.
4. As a user, I want to reset my password via email so that I can regain access if I forget it.
   - **AC:** One-time reset link expires in 1 hour; new password must differ from old.
5. As a user, I want to change my password from my profile settings so that I can keep my account secure.
6. As a user, I want to update my profile (name, company, avatar) so that other users can identify my business.
7. As an admin, I want to suspend a user account so that I can remove bad actors from the platform.
8. As a user, I want to verify my email address so that my account gains full trust status.
9. As a user, I want to log out and have my session invalidated server-side so that my account is safe on shared devices.
10. As an admin, I want to view a list of all registered users so that I can manage the community.

---

## Epic 2: Waste-to-Resource Exchange — Seller

11. As a seller, I want to create a waste listing with title, description, category, quantity, and price so that buyers can find my material.
    - **AC:** All required fields validated; listing appears in search within 5 seconds of creation.
12. As a seller, I want to upload up to 6 photos of my waste material so that buyers can assess its condition.
13. As a seller, I want to save a listing as a draft so that I can finish it later before publishing.
14. As a seller, I want to edit my listing at any time so that I can update price or quantity.
15. As a seller, I want to mark a listing as "reserved" so that other buyers know it is pending a deal.
16. As a seller, I want to mark a listing as "sold" so that it is removed from active search results.
17. As a seller, I want to delete a listing so that outdated items are removed from the platform.
18. As a seller, I want to duplicate an existing listing so that I can quickly re-list similar materials.
19. As a seller, I want to see how many buyers viewed my listing so that I can gauge market demand.
20. As a seller, I want to receive a notification when a buyer sends an inquiry so that I can respond promptly.
21. As a seller, I want to accept or decline a buyer inquiry so that I can manage my sales pipeline.
22. As a seller, I want to see all my active listings in one place so that I can manage my inventory.
23. As a seller, I want to see the AI-suggested best matches for my listing so that I find potential buyers faster.

---

## Epic 3: Waste-to-Resource Exchange — Buyer

24. As a buyer, I want to browse waste listings by category so that I find relevant materials.
25. As a buyer, I want to filter listings by location, price range, and quantity so that I find exactly what I need.
26. As a buyer, I want to sort listings by newest, lowest price, or AI relevance so that I can prioritize results.
27. As a buyer, I want to view a listing detail page with images and seller info so that I can evaluate the material.
28. As a buyer, I want to send an inquiry to a seller so that I can negotiate and arrange a purchase.
29. As a buyer, I want to save listings to a watchlist so that I can revisit them later.
30. As a buyer, I want to receive AI-powered recommendations based on my profile so that I discover relevant materials I didn't search for.
31. As a buyer, I want to search using keywords so that I can find specific materials quickly.
32. As a buyer, I want to see a seller's rating and past reviews so that I can assess trustworthiness.
33. As a buyer, I want to mark a transaction as completed so that it moves to my history.
34. As a buyer, I want to leave a review after a completed transaction so that I can help the community.

---

## Epic 4: Machinery Sharing — Owner

35. As a machine owner, I want to list idle equipment with daily and weekly rates so that other businesses can rent it.
36. As a machine owner, I want to add technical specifications to my listing so that renters know the machine's capabilities.
37. As a machine owner, I want to block dates on my availability calendar so that renters see accurate availability.
38. As a machine owner, I want to approve or decline booking requests so that I control who uses my equipment.
39. As a machine owner, I want to receive a notification for every new booking request so that I can respond quickly.
40. As a machine owner, I want to view my earnings summary so that I can track my rental income.
41. As a machine owner, I want to add maintenance notes to a listing so that renters are informed of the machine's condition.
42. As a machine owner, I want to edit or delete my listing at any time so that information stays current.

---

## Epic 5: Machinery Sharing — Renter

43. As a renter, I want to browse machines by category and location so that I find equipment near me.
44. As a renter, I want to view a machine's availability calendar so that I know when it is free.
45. As a renter, I want to select a date range and see the total rental cost so that I can budget accurately.
46. As a renter, I want to submit a booking request so that I can reserve the machine for my dates.
47. As a renter, I want to be notified when my booking is approved or declined so that I can plan accordingly.
48. As a renter, I want to view all my current and past bookings so that I can track my equipment usage.
49. As a renter, I want to cancel a booking before the start date so that I am not charged for unused rentals.
50. As a renter, I want to leave a review for the machine and owner after returning it so that I help other renters.

---

## Epic 6: Labor Pooling — Provider

51. As a labor provider, I want to create a listing advertising available workers with skill tags so that businesses can find us.
52. As a labor provider, I want to set my hourly rate so that businesses know the cost upfront.
53. As a labor provider, I want to specify my availability window (weekdays/weekends/full-time) so that only matching requests reach me.
54. As a labor provider, I want to toggle my listing active or inactive so that I only receive requests when we have capacity.
55. As a labor provider, I want to see all incoming work requests in an inbox so that I can manage my pipeline.
56. As a labor provider, I want to accept or decline requests with a message so that I can communicate with the requester.
57. As a labor provider, I want to view my earnings history so that I can track revenue.
58. As a labor provider, I want to add certifications to my profile so that businesses trust our qualifications.

---

## Epic 7: Labor Pooling — Requester

59. As a business requester, I want to search for workers by skill category so that I find the right expertise.
60. As a requester, I want to filter by location so that I find nearby workers who can be on-site.
61. As a requester, I want to filter by hourly rate so that I stay within my budget.
62. As a requester, I want to see available headcount so that I know if a provider can meet my staffing needs.
63. As a requester, I want to submit a work request with dates, estimated hours, and a job description so that providers understand the scope.
64. As a requester, I want to be notified when a provider responds so that I can finalize arrangements.
65. As a requester, I want to confirm completed hours after the work is done so that the transaction is recorded accurately.
66. As a requester, I want to leave a review for the labor provider so that I help the community evaluate their quality.

---

## Epic 8: Workspace Sharing — Owner

67. As a space owner, I want to list unused industrial space with daily and monthly rates so that tenants can rent it.
68. As a space owner, I want to add photos and a floor plan so that tenants can evaluate the space remotely.
69. As a space owner, I want to list amenities (loading dock, electricity, cold chain, WiFi) so that tenants can assess suitability.
70. As a space owner, I want to manage my availability calendar so that bookings don't overlap.
71. As a space owner, I want to review and approve tenant requests so that I control access to my property.
72. As a space owner, I want to see a revenue dashboard for my spaces so that I can optimize pricing.
73. As a space owner, I want to update rental rates at any time so that I can respond to market demand.

---

## Epic 9: Workspace Sharing — Tenant

74. As a tenant, I want to search for warehouses by size, location, and type so that I find a suitable space.
75. As a tenant, I want to see an availability calendar so that I know if my desired dates are free.
76. As a tenant, I want to view photos and a floor plan before submitting a request so that I avoid unsuitable spaces.
77. As a tenant, I want to submit a booking request with my intended use so that the owner can make an informed decision.
78. As a tenant, I want to be notified of approval or rejection within 48 hours so that I can make alternative arrangements.
79. As a tenant, I want to view access instructions after my booking is confirmed so that I can plan move-in logistics.
80. As a tenant, I want to leave a review after my tenancy so that I help other businesses evaluate the space.

---

## Epic 10: Notifications

81. As a user, I want an in-app notification bell that shows my unread count so that I never miss important events.
82. As a user, I want to click a notification and be taken directly to the relevant page so that I can act immediately.
83. As a user, I want to mark all notifications as read in one click so that I can clear my inbox quickly.
84. As a user, I want to configure whether to receive email notifications so that I am not overwhelmed with emails.
85. As a user, I want to receive an email when I have a new match so that I am alerted even when not logged in.
86. As a user, I want notifications to auto-expire after 90 days so that my notification history stays manageable.

---

## Epic 11: AI & Recommendations

87. As a seller, I want to see AI-suggested matching buyers for my waste listing so that I can proactively reach out.
88. As a buyer, I want AI recommendations on my dashboard so that I discover materials without searching.
89. As a listing creator, I want a price suggestion based on similar listings so that I price competitively.
90. As a user, I want to see demand heatmaps by category and region so that I understand market opportunities.
91. As a user, I want to dismiss irrelevant AI recommendations so that the algorithm learns my preferences.
92. As a business, I want to see my estimated CO₂ offset from completed transactions so that I can report sustainability metrics.

---

## Epic 12: Reviews & Trust

93. As a user, I want to leave a 1–5 star rating and a written review after each transaction so that I can share my experience.
94. As a user, I want to see a seller/provider's average rating prominently displayed so that I can assess reliability quickly.
95. As a user, I want to read individual reviews before engaging with a counterparty so that I can make informed decisions.
96. As a user, I want reviews to be linked to verified transactions so that fake reviews are prevented.
97. As an admin, I want to flag and remove abusive reviews so that the review system remains trustworthy.
98. As a user, I want to report a listing as fraudulent so that the admin team can investigate.

---

## Epic 13: Search & Discovery

99. As a user, I want a global search bar that spans all four pillars so that I don't need to search each section separately.
100. As a user, I want auto-complete suggestions as I type so that I find listings faster.
101. As a user, I want to save a search query and receive alerts when new matching listings appear so that I stay on top of opportunities.
102. As a user, I want to filter search results by price range, location, and category simultaneously so that I narrow down options efficiently.
103. As a user, I want search results to load within 1 second so that my experience remains smooth.

---

## Epic 14: Admin

104. As an admin, I want to view a platform-wide analytics dashboard so that I can monitor growth.
105. As an admin, I want to moderate listings that are flagged by users so that the platform stays clean.
106. As an admin, I want to broadcast a system announcement to all users so that I can communicate important updates.
107. As an admin, I want to view and cancel any transaction so that I can resolve disputes.
108. As an admin, I want to promote a user to admin role so that I can grow the moderation team.

---

## Epic 15: Onboarding

109. As a new user, I want a guided onboarding tour that shows the key features so that I understand how to use the platform.
110. As a new user, I want to see sample listings on the dashboard before I create my own so that I understand what good listings look like.
111. As a new user, I want a "Complete Your Profile" checklist so that I know what steps remain to get started.

---

## Epic 16: Mobile & Accessibility

112. As a mobile user, I want the interface to be fully responsive so that I can use EcoNexus on my phone.
113. As a user with a screen reader, I want all interactive elements to have ARIA labels so that I can navigate the platform.
114. As a user with colour-blindness, I want status indicators to use shapes or text in addition to colour so that I can distinguish them.
115. As a user on a slow connection, I want images to be lazy-loaded so that the page is usable before all images download.

---

## Epic 17: Performance & Reliability

116. As a user, I want listing pages to load in under 2 seconds so that I can browse efficiently.
117. As a user, I want the platform to be available 99.9% of the time so that my business operations are not disrupted.
118. As a user, I want optimistic UI updates so that the interface feels instant even before the server confirms changes.
119. As a user, I want a clear error message when something goes wrong so that I know what to do next.
120. As a user, I want form data to be preserved if my session expires mid-edit so that I don't lose my work.

---

## Epic 18: Security

121. As a user, I want my password to be stored as a bcrypt hash so that my credentials are protected.
122. As a user, I want all API requests to use HTTPS so that my data is encrypted in transit.
123. As a user, I want file uploads to be validated for type and size so that malicious files cannot be uploaded.
124. As a user, I want rate limiting on the login endpoint so that brute-force attacks are prevented.
125. As an admin, I want an audit log of admin actions so that all moderation decisions are traceable.

---

## Epic 19: Integrations (Future)

126. As a user, I want to sign in with Google so that I don't need a separate password.
127. As a user, I want to pay via Stripe for machinery and workspace bookings so that transactions are secure.
128. As a user, I want to export my transaction history to CSV so that I can use it in my accounting software.
129. As a business, I want webhook notifications for booking events so that I can integrate with my internal systems.
130. As a developer, I want a public API key so that I can integrate EcoNexus data into my own dashboards.

---

## Epic 20: Sustainability Reporting

131. As a business user, I want to see the total weight of waste I have diverted from landfill so that I can report it in my sustainability disclosures.
132. As a business, I want to see the estimated carbon savings from my circular economy activities so that I can include them in ESG reports.
133. As a platform user, I want to see the collective platform impact (total CO₂ saved) so that I feel motivated to participate.
134. As a business, I want to download a sustainability certificate for a completed transaction so that I can use it in marketing materials.
135. As a business, I want to set and track a circular economy target for the year so that I have a measurable goal.

---

## Epic 21: Messaging (Future)

136. As a buyer, I want to message a seller directly within the platform so that we can negotiate without sharing personal contact details.
137. As a user, I want to see a notification when I receive a new message so that I respond promptly.
138. As a user, I want message history to be preserved so that I can refer back to agreed terms.
139. As a user, I want to report a message as abusive so that inappropriate behaviour can be moderated.
140. As a user, I want read receipts so that I know when my message has been seen.

---

## Epic 22: Additional

141. As a user, I want a dark mode so that I can use the platform comfortably at night.
142. As a user, I want to set my preferred unit system (metric/imperial) so that quantities and areas are shown in familiar units.
143. As a user, I want to set my preferred currency so that prices are displayed in my local currency.
144. As a user, I want to receive a weekly digest email summarizing new listings relevant to me so that I stay informed without visiting the site daily.
145. As a power user, I want keyboard shortcuts for common actions so that I can work more efficiently.
146. As a user, I want to share a listing via a link so that I can send it to colleagues outside the platform.
147. As a user, I want to print a listing's details so that I can use it in offline procurement processes.
148. As an admin, I want to configure the AI recommendation weights so that I can tune the matching quality.
149. As a seller, I want to feature my listing for a period so that it appears at the top of search results.
150. As a platform user, I want a public leaderboard of the most active circular economy participants so that I feel recognized for my contributions.
