# Topic 11: Call Flow, Session Management, and Mobility Control

**Q1.** The first step of a UE initiating access to an LTE cell is usually:
A) Random Access (RACH) procedure  B) Handover  C) Detach  D) Paging
**Answer: A)**
**ব্যাখ্যা:** UE preamble পাঠায় → RAR → RRC Connection Request।

**Q2.** The correct order of RRC connection setup messages is:
A) Request → Setup → Setup Complete  B) Setup → Request → Complete  C) Complete → Request → Setup  D) Request → Complete → Setup
**Answer: A)**
**ব্যাখ্যা:** RRCConnectionRequest → RRCConnectionSetup → RRCConnectionSetupComplete (সাথে NAS Attach Request)।

**Q3.** In LTE, a default bearer is created during:
A) Attach  B) Detach  C) Handover only  D) Paging
**Answer: A) Attach**
**ব্যাখ্যা:** Default EPS bearer non-GBR এবং IP address সহ always-on।

**Q4.** In 5G, the data session is called:
A) PDU Session  B) PDP Context  C) EPS Bearer  D) RAB
**Answer: A)**
**ব্যাখ্যা:** PDU Session-এর ভিতরে QoS Flow থাকে (QFI দিয়ে চিহ্নিত)।

**Q5.** Which RRC state was newly introduced in 5G NR?
A) RRC_INACTIVE  B) RRC_IDLE  C) RRC_CONNECTED  D) RRC_SLEEP
**Answer: A)**
**ব্যাখ্যা:** INACTIVE-এ UE context RAN-এ থাকে, দ্রুত connected-এ ফেরা যায় ও signaling কমে।

**Q6.** Paging is used to:
A) Locate an idle UE for incoming call/data  B) Handover UE  C) Encrypt data  D) Allocate IP
**Answer: A)**
**ব্যাখ্যা:** Tracking Area-র সেলগুলোতে paging পাঠানো হয়; DRX দিয়ে ব্যাটারি সাশ্রয় হয়।

**Q7.** UE moving to a new Tracking Area performs:
A) Tracking Area Update (TAU)  B) Attach  C) RACH only  D) Detach
**Answer: A)**
**ব্যাখ্যা:** 2G/3G-তে LAU/RAU, LTE-তে TAU, 5G-তে Registration Update।

**Q8.** LTE measurement event A3 means:
A) Neighbour becomes offset better than serving  B) Serving worse than threshold  C) Neighbour better than threshold  D) Serving better than threshold
**Answer: A)**
**ব্যাখ্যা:** A3 intra-frequency handover-এর সবচেয়ে প্রচলিত trigger। A1 = serving threshold-এর উপরে, A2 = নিচে।

**Q9.** In an X2-based handover, the source eNB first sends which message to the target eNB?
A) Handover Request  B) Attach Request  C) Paging  D) RRC Release
**Answer: A)**
**ব্যাখ্যা:** Target Admission Control করে Handover Request Acknowledge পাঠায়; পরে UE-কে Reconfiguration command যায়।

**Q10.** Timing Advance is used to:
A) Synchronize uplink transmissions from different UEs  B) Increase power  C) Encrypt  D) Allocate PCI
**Answer: A)**
**ব্যাখ্যা:** দূরত্ব অনুযায়ী propagation delay পূরণ করে UL সিঙ্ক রাখে।

**Q11.** In LTE, NAS messages are exchanged between:
A) UE and MME  B) UE and eNB only  C) eNB and S-GW  D) MME and HSS
**Answer: A)**
**ব্যাখ্যা:** NAS = Attach, TAU, Service Request, Authentication। RRC = UE↔eNB।

**Q12.** SRVCC enables:
A) Handover of a VoLTE call to 2G/3G CS  B) 5G slicing  C) Paging  D) ARQ
**Answer: A)**
**ব্যাখ্যা:** Single Radio Voice Call Continuity LTE কভারেজ শেষ হলে কল CS domain-এ নিয়ে যায়।
