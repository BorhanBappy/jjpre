# Topic 06: Network Function Virtualization (NFV) in Cellular Systems

**Q1.** NFV was standardized primarily by:
A) ETSI NFV ISG  B) IEEE 802.3  C) ITU-R only  D) IETF only
**Answer: A) ETSI NFV ISG**
**ব্যাখ্যা:** ২০১২ সালে ETSI-তে Industry Specification Group গঠিত হয়।

**Q2.** The three main blocks of the ETSI NFV architecture are:
A) VNF, NFVI, MANO  B) AMF, SMF, UPF  C) RRH, BBU, CU  D) MME, SGW, PGW
**Answer: A)**
**ব্যাখ্যা:** VNF = সফটওয়্যার ফাংশন, NFVI = হার্ডওয়্যার+virtualization লেয়ার, MANO = ম্যানেজমেন্ট ও অর্কেস্ট্রেশন।

**Q3.** Which is NOT a MANO component?
A) NFVO  B) VNFM  C) VIM  D) HSS
**Answer: D) HSS**
**ব্যাখ্যা:** MANO = NFV Orchestrator, VNF Manager, Virtualized Infrastructure Manager।

**Q4.** The VIM manages:
A) NFVI compute, storage and network resources  B) Radio spectrum  C) Billing  D) SIM cards
**Answer: A)**
**ব্যাখ্যা:** OpenStack সাধারণ VIM উদাহরণ।

**Q5.** Which of the following is a VIM platform?
A) OpenStack  B) Wireshark  C) Apache HTTP  D) Putty
**Answer: A) OpenStack**
**ব্যাখ্যা:** OpenStack (Nova, Neutron, Cinder) ভার্চুয়াল রিসোর্স ম্যানেজ করে।

**Q6.** A software that creates and runs virtual machines is called:
A) Hypervisor  B) Compiler  C) Router  D) Codec
**Answer: A) Hypervisor**
**ব্যাখ্যা:** KVM, ESXi, Xen ইত্যাদি। Type-1 (bare-metal) ও Type-2 (hosted) আছে।

**Q7.** CNF (Cloud-native Network Function) is typically deployed using:
A) Containers and Kubernetes  B) Dedicated ASIC boxes  C) Analog switches  D) Floppy disks
**Answer: A)**
**ব্যাখ্যা:** CNF microservice ও container ভিত্তিক, ফলে VM-এর চেয়ে হালকা ও দ্রুত scale করা যায়।

**Q8.** SR-IOV and DPDK are used in NFV to:
A) Improve data-plane packet processing performance  B) Increase delay  C) Remove hypervisor  D) Encrypt SIM
**Answer: A)**
**ব্যাখ্যা:** Kernel bypass ও NIC virtualization দিয়ে high-throughput packet processing পাওয়া যায়।

**Q9.** The descriptor that defines a VNF's resource and deployment requirements is:
A) VNFD  B) NSD  C) HSS  D) APN
**Answer: A) VNFD**
**ব্যাখ্যা:** VNF Descriptor VNF-এর image, vCPU, memory, network ইত্যাদি বর্ণনা করে। NSD = Network Service Descriptor।

**Q10.** Which protocol is closely associated with SDN control?
A) OpenFlow  B) SMTP  C) POP3  D) TELNET
**Answer: A) OpenFlow**
**ব্যাখ্যা:** SDN controller ও data-plane switch-এর মধ্যে OpenFlow যোগাযোগ করে।

**Q11.** A key benefit of NFV for operators is:
A) Reduced CAPEX/OPEX and faster service deployment  B) Vendor lock-in  C) More physical boxes  D) Lower scalability
**Answer: A)**
**ব্যাখ্যা:** COTS হার্ডওয়্যার, automation ও elasticity-র ফলে খরচ কমে।

**Q12.** Elasticity in NFV means:
A) Automatically scaling resources up/down with demand  B) Fixed capacity  C) Stretching cables  D) Reducing security
**Answer: A)**
**ব্যাখ্যা:** লোড অনুযায়ী VNF instance বাড়ানো-কমানো (scale-out/in) করা যায়।
