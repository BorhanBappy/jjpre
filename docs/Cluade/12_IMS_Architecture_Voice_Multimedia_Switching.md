# Topic 12: IMS Architecture for Voice and Multimedia Switching

**Q1.** IMS stands for:
A) IP Multimedia Subsystem  B) Internet Mobile Service  C) Integrated Media Switch  D) IP Mobile System
**Answer: A)**
**ব্যাখ্যা:** 3GPP Rel-5-এ প্রবর্তিত SIP-ভিত্তিক সার্ভিস আর্কিটেকচার।

**Q2.** The first contact point of a UE in IMS is:
A) P-CSCF  B) I-CSCF  C) S-CSCF  D) HSS
**Answer: A) P-CSCF**
**ব্যাখ্যা:** P-CSCF Proxy হিসেবে security (IPsec), compression ও QoS (Rx) হ্যান্ডেল করে।

**Q3.** Which CSCF acts as SIP registrar and invokes application servers?
A) S-CSCF  B) P-CSCF  C) I-CSCF  D) E-CSCF
**Answer: A) S-CSCF**
**ব্যাখ্যা:** S-CSCF HSS (Cx) থেকে প্রোফাইল নিয়ে iFC অনুযায়ী AS-কে ট্রিগার করে।

**Q4.** I-CSCF is mainly responsible for:
A) Entry point of home network and S-CSCF selection  B) Media transcoding  C) Charging  D) Radio control
**Answer: A)**
**ব্যাখ্যা:** I-CSCF HSS-কে জিজ্ঞেস করে উপযুক্ত S-CSCF নির্বাচন করে।

**Q5.** The interface between S-CSCF/I-CSCF and HSS is:
A) Cx (Diameter)  B) Gm  C) Mw  D) Rx
**Answer: A) Cx**
**ব্যাখ্যা:** Gm = UE↔P-CSCF, Mw = CSCF↔CSCF, Rx = P-CSCF↔PCRF, ISC = S-CSCF↔AS।

**Q6.** VoLTE voice media is carried over a bearer with QCI:
A) 1  B) 5  C) 8  D) 9
**Answer: A) 1**
**ব্যাখ্যা:** QCI 1 = GBR conversational voice; QCI 5 = IMS signaling।

**Q7.** MRF in IMS provides:
A) Conferencing, announcements and media processing  B) Authentication  C) Billing  D) Routing
**Answer: A)**
**ব্যাখ্যা:** Media Resource Function (MRFC + MRFP)।

**Q8.** IMS-to-PSTN signaling interworking is done by:
A) MGCF  B) BGCF  C) MRF  D) PCRF
**Answer: A) MGCF**
**ব্যাখ্যা:** MGCF SIP↔ISUP রূপান্তর করে এবং IM-MGW-কে নিয়ন্ত্রণ করে; BGCF breakout নির্ধারণ করে।

**Q9.** During SIP registration the first REGISTER receives which response from the network?
A) 401 Unauthorized (challenge)  B) 200 OK  C) 180 Ringing  D) 404 Not Found
**Answer: A)**
**ব্যাখ্যা:** IMS AKA challenge-এর জন্য 401 আসে, UE দ্বিতীয় REGISTER-এ response পাঠালে 200 OK।

**Q10.** Emergency calls in IMS are handled by:
A) E-CSCF  B) I-CSCF  C) HSS  D) MRF
**Answer: A) E-CSCF**
**ব্যাখ্যা:** Emergency CSCF লোকেশন তথ্য সহ PSAP-তে কল রাউট করে।

**Q11.** Voice over 5G NR with IMS is called:
A) VoNR  B) VoLTE  C) CSFB  D) VoWiFi
**Answer: A) VoNR**
**ব্যাখ্যা:** VoLTE = LTE-তে IMS ভয়েস, VoNR = 5G NR-এ।

**Q12.** The application server providing supplementary services like call forwarding in IMS is:
A) TAS (Telephony Application Server)  B) PCRF  C) AUSF  D) NRF
**Answer: A) TAS**
**ব্যাখ্যা:** call forward/barring/hold ইত্যাদি TAS দেয়।
