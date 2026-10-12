# Topic 14: HLR, HSS, and Registry Systems for Mobile Communication

**Q1.** HLR stores:
A) Permanent subscriber profile and current VLR/MSC location  B) Only IMEI  C) Radio plans  D) Packet routes
**Answer: A)**
**ব্যাখ্যা:** IMSI, MSISDN, সার্ভিস সাবস্ক্রিপশন ও বর্তমান লোকেশন।

**Q2.** VLR stores:
A) Temporary data of visiting subscribers  B) Permanent data  C) Keys only  D) Billing
**Answer: A)**
**ব্যাখ্যা:** সাধারণত MSC-র সাথে সমন্বিত; HLR থেকে প্রোফাইল ক্যাশ করে।

**Q3.** The GSM interface between VLR and HLR is:
A) D  B) B  C) E  D) F
**Answer: A) D**
**ব্যাখ্যা:** B = MSC↔VLR, C = GMSC↔HLR, D = VLR↔HLR, E = MSC↔MSC, F = MSC↔EIR।

**Q4.** The protocol used between MSC/VLR and HLR in 2G/3G is:
A) MAP  B) SIP  C) HTTP  D) GTP-U
**Answer: A) MAP**
**ব্যাখ্যা:** Mobile Application Part, SS7 স্ট্যাকের উপরে (TCAP/SCCP)।

**Q5.** During call delivery to a roaming user, the HLR obtains which number from the VLR?
A) MSRN  B) IMEI  C) TMSI  D) MCC
**Answer: A) MSRN**
**ব্যাখ্যা:** GMSC → HLR (Send Routing Info) → HLR → VLR (Provide Roaming Number) → MSRN → কল রাউট।

**Q6.** The LTE equivalent of HLR is:
A) HSS  B) VLR  C) EIR  D) SGSN
**Answer: A) HSS**
**ব্যাখ্যা:** HSS = HLR + AuC + IMS ডেটা। 5G-তে UDM/UDR।

**Q7.** The interface between MME and HSS is:
A) S6a  B) S1-U  C) X2  D) Gn
**Answer: A) S6a**
**ব্যাখ্যা:** Diameter প্রোটোকল ব্যবহার করে।

**Q8.** AuC stores:
A) Authentication key Ki for each subscriber  B) IMEI list  C) Call logs  D) Spectrum
**Answer: A)**
**ব্যাখ্যা:** AuC RAND, SRES, Kc বা AV তৈরি করে।

**Q9.** EIR maintains lists of IMEI called:
A) White, Grey and Black lists  B) Red and Blue  C) Fast and Slow  D) None
**Answer: A)**
**ব্যাখ্যা:** চুরি যাওয়া হ্যান্ডসেট ব্ল্যাকলিস্ট করে নেটওয়ার্ক অ্যাক্সেস বন্ধ করা যায়।

**Q10.** The interface between SGSN and HLR in GPRS is:
A) Gr  B) Gn  C) Gb  D) Gi
**Answer: A) Gr**
**ব্যাখ্যা:** Gc = GGSN↔HLR।

**Q11.** In 5GC, the Nudm interface offers:
A) Subscription data and authentication services  B) User-plane forwarding  C) Slice selection  D) Radio scheduling
**Answer: A)**
**ব্যাখ্যা:** UDM SBI-এর মাধ্যমে AMF/SMF/AUSF-কে সেবা দেয়।

**Q12.** Number portability relies on a database commonly called:
A) NPDB (Number Portability Database)  B) EIR  C) VLR  D) PCRF
**Answer: A)**
**ব্যাখ্যা:** MNP-তে কলের আগে নম্বরের বর্তমান অপারেটর কোয়েরি করা হয়।
