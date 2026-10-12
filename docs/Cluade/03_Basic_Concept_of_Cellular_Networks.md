# Topic 03: Basic Concept of Cellular Networks

**Q1.** Frequency reuse factor for cluster size N = 7 is:
A) 7  B) 1/7  C) 1/3  D) 3/7
**Answer: B) 1/7**
**ব্যাখ্যা:** Reuse factor = 1/N। cluster-এ N সেল সব ফ্রিকোয়েন্সি ভাগ করে নেয়।

**Q2.** The cluster size for i = 1, j = 1 is:
A) 1  B) 3  C) 4  D) 7
**Answer: B) 3**
**ব্যাখ্যা:** N = i² + ij + j² = 1 + 1 + 1 = 3। (i=2,j=1 → 7; i=2,j=2 → 12)

**Q3.** A system has 420 channels and N = 7. Channels per cell are:
A) 42  B) 60  C) 70  D) 84
**Answer: B) 60**
**ব্যাখ্যা:** ৪২০ ÷ ৭ = ৬০ channel/cell।

**Q4.** Which cell type has the largest coverage?
A) Femtocell  B) Picocell  C) Microcell  D) Macrocell
**Answer: D) Macrocell**
**ব্যাখ্যা:** আকারের ক্রম: Macro > Micro > Pico > Femto।

**Q5.** The ideal geometric shape used for cell planning is:
A) Square  B) Circle  C) Hexagon  D) Triangle
**Answer: C) Hexagon**
**ব্যাখ্যা:** Hexagon গোলাকার কভারেজের কাছাকাছি এবং ফাঁক/ওভারল্যাপ ছাড়া এলাকা ঢাকে।

**Q6.** If cell radius is halved through cell splitting, the number of cells in the same area becomes:
A) 2 times  B) 4 times  C) 8 times  D) unchanged
**Answer: B) 4 times**
**ব্যাখ্যা:** Area ∝ R²। R অর্ধেক হলে এলাকা ১/৪, তাই সেল সংখ্যা ৪ গুণ।

**Q7.** Co-channel interference can be reduced by:
A) Decreasing D/R ratio  B) Increasing D/R ratio  C) Decreasing cluster size  D) Increasing transmit power
**Answer: B) Increasing D/R ratio**
**ব্যাখ্যা:** D/R = √(3N)। বেশি D/R মানে co-channel সেল দূরে, interference কম।

**Q8.** Soft handover is used in:
A) GSM  B) WCDMA/CDMA  C) AMPS  D) TDMA only
**Answer: B) WCDMA/CDMA**
**ব্যাখ্যা:** CDMA-তে UE একসাথে একাধিক সেলের সাথে যুক্ত থাকতে পারে (make-before-break)। GSM = hard handover।

**Q9.** The "near-far problem" in CDMA is solved by:
A) Power control  B) Sectoring  C) Cell splitting  D) Frequency hopping
**Answer: A) Power control**
**ব্যাখ্যা:** কাছের UE বেশি শক্তিশালী সিগন্যাল পাঠিয়ে দূরেরটিকে ঢেকে দিতে পারে, তাই fast power control প্রয়োজন।

**Q10.** The ping-pong effect in handover is reduced by:
A) Hysteresis and time-to-trigger  B) Removing neighbours  C) Increasing Tx power  D) Reducing cell size
**Answer: A)**
**ব্যাখ্যা:** Hysteresis margin ও TTT বারবার অপ্রয়োজনীয় handover আটকায়।

**Q11.** The process of tracking a mobile user's location while idle is called:
A) Registration/Location update  B) Handover  C) Scheduling  D) Modulation
**Answer: A)**
**ব্যাখ্যা:** Location/Tracking Area Update করে নেটওয়ার্ক idle UE-র এলাকা জানে, যাতে paging সঠিক জায়গায় হয়।

**Q12.** Sectoring (e.g., 3 sectors) primarily helps to:
A) Reduce co-channel interference and increase capacity  B) Reduce number of channels  C) Remove handover  D) Reduce antenna count
**Answer: A)**
**ব্যাখ্যা:** Directional অ্যান্টেনা interference সোর্স কমায়, ফলে reuse distance না বাড়িয়েই capacity বাড়ে।
