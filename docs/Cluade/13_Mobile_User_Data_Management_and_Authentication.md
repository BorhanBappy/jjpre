# Topic 13: Mobile User Data Management & Authentication

**Q1.** IMSI is composed of:
A) MCC + MNC + MSIN  B) TAC + SNR + CD  C) LAC + CI  D) MCC + LAC
**Answer: A)**
**ব্যাখ্যা:** মোট সর্বোচ্চ ১৫ ডিজিট। বাংলাদেশের MCC = 470।

**Q2.** The secret key stored in SIM and AuC is:
A) Ki  B) Kc  C) TMSI  D) LAI
**Answer: A) Ki**
**ব্যাখ্যা:** Ki (128-bit) কখনো রেডিওতে পাঠানো হয় না।

**Q3.** In GSM, authentication algorithm A3 produces:
A) SRES  B) Kc  C) TMSI  D) RAND
**Answer: A) SRES**
**ব্যাখ্যা:** A3: (Ki, RAND) → SRES; A8: (Ki, RAND) → Kc; A5: ciphering।

**Q4.** GSM authentication is:
A) One-way (network authenticates the user)  B) Mutual  C) None  D) Only for data
**Answer: A)**
**ব্যাখ্যা:** ফলে fake base station আক্রমণ সম্ভব; 3G/4G/5G-তে mutual authentication (AUTN)।

**Q5.** The sequence number SQN in AKA is used to prevent:
A) Replay attacks  B) Overheating  C) Interference  D) Roaming
**Answer: A)**
**ব্যাখ্যা:** USIM AUTN-এর SQN যাচাই করে পুরনো vector পুনর্ব্যবহার আটকায়।

**Q6.** The key at top of LTE key hierarchy derived from CK and IK is:
A) KASME  B) KeNB  C) KNASint  D) Kc
**Answer: A) KASME**
**ব্যাখ্যা:** KASME → KNASenc/KNASint ও KeNB → KRRC/KUP।

**Q7.** In 5G, the concealed form of SUPI sent over the air is:
A) SUCI  B) GUTI  C) TMSI  D) IMEI
**Answer: A) SUCI**
**ব্যাখ্যা:** Home network public key (ECIES) দিয়ে এনক্রিপ্ট করা, IMSI-catcher আটকায়।

**Q8.** IMEI has how many digits (excluding IMEISV)?
A) 15  B) 10  C) 16  D) 20
**Answer: A) 15**
**ব্যাখ্যা:** 8 digit TAC + 6 digit serial + 1 check digit (Luhn)। IMEISV = 16 digit।

**Q9.** Temporary identity used in LTE instead of IMSI is:
A) GUTI  B) SUCI  C) MSISDN  D) MCC
**Answer: A) GUTI**
**ব্যাখ্যা:** 2G/3G = TMSI/P-TMSI; LTE = GUTI; 5G = 5G-GUTI।

**Q10.** The 5G function that verifies authentication response in home network (AKA) is:
A) AUSF  B) NRF  C) UPF  D) NSSF
**Answer: A) AUSF**
**ব্যাখ্যা:** AUSF UDM/ARPF-এর সাথে 5G-AKA/EAP-AKA' সম্পন্ন করে।

**Q11.** LTE ciphering algorithms are known as:
A) EEA  B) A5  C) A3  D) A8
**Answer: A) EEA**
**ব্যাখ্যা:** EEA = EPS Encryption Algorithm, EIA = Integrity। 5G-তে NEA/NIA।

**Q12.** The standardized number format for phone numbers is:
A) E.164  B) E.212  C) X.25  D) G.711
**Answer: A) E.164**
**ব্যাখ্যা:** E.164 = MSISDN/ফোন নম্বর; E.212 = IMSI।
