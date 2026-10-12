# Topic 10: Evolution from Circuit Switching to Packet Core (EPC & 5GC)

**Q1.** EPC was introduced in 3GPP release:
A) Release 8  B) Release 99  C) Release 15  D) Release 5
**Answer: A) Release 8**
**ব্যাখ্যা:** Rel-99 = UMTS, Rel-5 = IMS/HSDPA, Rel-8 = LTE/EPC, Rel-15 = 5G (প্রথম)।

**Q2.** Which of the following is the correct evolution order of core networks?
A) MSC/VLR → GPRS core → EPC → 5GC  B) EPC → MSC → 5GC → GPRS  C) 5GC → EPC → MSC → GPRS  D) GPRS → 5GC → MSC → EPC
**Answer: A)**
**ব্যাখ্যা:** 2G CS → 2.5G PS যোগ → 4G all-IP EPC → 5G SBA।

**Q3.** 5GC uses which architecture principle?
A) Service-Based Architecture (SBA)  B) Circuit-switched only  C) Monolithic  D) Analog trunking
**Answer: A)**
**ব্যাখ্যা:** NF গুলো HTTP/2 + JSON/REST ভিত্তিক Service-Based Interface-এ যোগাযোগ করে।

**Q4.** The MME functions in EPC are split in 5GC mainly into:
A) AMF and SMF  B) UPF and UDM  C) NRF and NSSF  D) PCF and NEF
**Answer: A)**
**ব্যাখ্যা:** AMF = registration, mobility, NAS; SMF = session ও IP management।

**Q5.** The 5GC function responsible for user-plane packet forwarding is:
A) UPF  B) AMF  C) AUSF  D) NRF
**Answer: A) UPF**
**ব্যাখ্যা:** UPF-এ packet routing, QoS enforcement, usage reporting, anchor point।

**Q6.** NRF is responsible for:
A) NF registration and discovery  B) Authentication  C) Charging  D) Paging
**Answer: A)**
**ব্যাখ্যা:** Network Repository Function NF profile সংরক্ষণ করে।

**Q7.** CUPS (Control and User Plane Separation) was first introduced in:
A) Release 14  B) Release 99  C) Release 4  D) Release 18
**Answer: A) Release 14**
**ব্যাখ্যা:** EPC-র SGW/PGW-কে -C ও -U-তে ভাগ করা হয়; 5GC-তে মূল নীতি হিসেবে SMF/UPF।

**Q8.** 5G NSA Option 3x uses which core?
A) EPC  B) 5GC  C) MSC  D) None
**Answer: A) EPC**
**ব্যাখ্যা:** NSA = LTE anchor + EN-DC, core EPC। SA (Option 2) = gNB + 5GC।

**Q9.** Which function stores subscriber data in 5GC?
A) UDM/UDR  B) UPF  C) SMF  D) NSSF
**Answer: A)**
**ব্যাখ্যা:** UDM subscription ও auth credential ম্যানেজ করে, UDR ডেটা রাখে।

**Q10.** The NF that exposes network capabilities to third-party applications is:
A) NEF  B) AUSF  C) NRF  D) AMF
**Answer: A) NEF**
**ব্যাখ্যা:** Network Exposure Function API দিয়ে বাইরের অ্যাপের সাথে নিরাপদে তথ্য বিনিময় করে।

**Q11.** The N1 interface connects:
A) UE and AMF  B) gNB and AMF  C) SMF and UPF  D) UPF and DN
**Answer: A) UE and AMF**
**ব্যাখ্যা:** NAS signaling UE↔AMF। gNB↔AMF = N2।

**Q12.** In 5G, the MSC functionality for voice is replaced by:
A) IMS (VoNR)  B) SGSN  C) VLR  D) BSC
**Answer: A)**
**ব্যাখ্যা:** ভয়েস সম্পূর্ণ IP/IMS-এ চলে; MSC Server + MGW আর লাগে না।
