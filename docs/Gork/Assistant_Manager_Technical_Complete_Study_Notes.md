# Assistant Manager (Technical) – Complete Study Notes
## সহকারী ব্যবস্থাপক (কারিগরি)
### Cellular Communications Syllabus – All Topics Covered
### Exam Language: English | Notes prepared for MCQ success

> এই নোটগুলো পড়লে সিলেবাসের যেকোনো টপিক থেকে ইংরেজি MCQ এলে আপনি আত্মবিশ্বাসের সাথে উত্তর দিতে পারবেন।  
> সব টপিক আলাদা আলাদা করে গুরুত্বপূর্ণ পয়েন্ট, Key Terms, এবং মনে রাখার টিপস দেওয়া আছে।

---

# 1. Telecom Basics

### Key Concepts
- **Telecommunication**: Transmission of information (voice, data, video) over a distance.
- Basic elements of any communication system:
  1. **Transmitter** – converts information into signal
  2. **Channel / Medium** – carries the signal (wired or wireless)
  3. **Receiver** – recovers the original information
- **Simplex**: One-way communication (e.g., radio broadcast)
- **Half-duplex**: Two-way but one direction at a time (e.g., walkie-talkie)
- **Full-duplex**: Two-way simultaneous communication (e.g., telephone)
- **Analog signal**: Continuous in time and amplitude
- **Digital signal**: Discrete (0s and 1s)
- Advantage of Digital: Better noise immunity, easy regeneration, compression possible
- **Bandwidth**: Range of frequencies a signal or channel occupies
- **Modulation**: Process of impressing information onto a carrier wave (needed for long-distance transmission and smaller antennas)

### Must Remember Terms
| Term              | Meaning                                      |
|-------------------|----------------------------------------------|
| SNR               | Signal-to-Noise Ratio                        |
| BER               | Bit Error Rate                               |
| Throughput        | Actual data transfer rate                    |
| Latency           | Delay in transmission                        |
| Attenuation       | Loss of signal strength                      |

---

# 2. Radio Communication Basics

### Key Concepts
- Radio waves are electromagnetic waves used for wireless communication.
- **Frequency (f)** and **Wavelength (λ)** relation:  
  \( c = f \times \lambda \) where \( c = 3 \times 10^8 \) m/s
- Higher frequency → shorter wavelength → more attenuation → better capacity
- Types of propagation:
  - **Ground wave** – low frequency, follows earth surface
  - **Sky wave** – HF, reflects from ionosphere
  - **Space wave / LOS** – VHF/UHF/Microwave (used in cellular)
- **Modulation types**:
  - AM (Amplitude Modulation)
  - FM (Frequency Modulation) – more noise resistant
  - PM (Phase Modulation)
- **Free Space Path Loss (FSPL)** increases with frequency and distance.
- Antenna gain, polarization, and beamwidth are important.

### Important Frequencies in Cellular
| Band       | Approximate Frequency | Use                  |
|------------|-----------------------|----------------------|
| Low band   | 700–900 MHz           | Coverage             |
| Mid band   | 1800–2600 MHz         | Capacity + Coverage  |
| High band  | 3.5 GHz & mmWave      | High capacity (5G)   |

---

# 3. Basic Concept of Cellular Networks

### Core Idea
Cellular concept allows **frequency reuse** → huge increase in system capacity using limited spectrum.

### Key Points
- **Cell**: Geographical area covered by one base station
- **Cluster**: Group of cells that together use the complete set of frequencies (common size N = 7, 4, 3, 12)
- **Frequency Reuse Factor** = 1/N
- Smaller N → more capacity but more interference
- **Handoff / Handover**: Process of transferring an ongoing call from one cell to another
  - **Hard Handoff**: Break-before-make (GSM, LTE)
  - **Soft Handoff**: Make-before-break (CDMA)
- **Interference types**:
  - Co-channel interference (same frequency)
  - Adjacent channel interference
- **Sectorization**: Dividing cell into 3 or 6 sectors using directional antennas → reduces interference and increases capacity

### Must Remember
- Hexagonal cell shape is used in planning for simplicity.
- Capacity increases with more cells (cell splitting) and sectorization.

---

# 4. Mobile Core and Backhaul Architectures

### Radio Access Network (RAN) vs Core Network
- **RAN**: Base stations (BTS / NodeB / eNodeB / gNodeB) + radio links
- **Core Network**: Handles authentication, mobility, session, charging, interconnect

### Backhaul
- Connection between Base Station and Core Network
- Media: Microwave, Optical Fiber, Satellite
- Must be high capacity and low latency

### Evolution of Core
| Generation | Core Name              | Key Nodes                     |
|------------|------------------------|-------------------------------|
| 2G/3G      | Circuit + Packet       | MSC, SGSN, GGSN, HLR          |
| 4G LTE     | Evolved Packet Core (EPC) | MME, SGW, PGW, HSS, PCRF   |
| 5G         | 5G Core (5GC)          | AMF, SMF, UPF, AUSF, UDM      |

---

# 5. Packet-Switched Mobile Networks

### Circuit Switching vs Packet Switching
| Feature              | Circuit Switching          | Packet Switching              |
|----------------------|----------------------------|-------------------------------|
| Path                 | Dedicated                  | Shared / statistical          |
| Efficiency           | Low for data               | High                          |
| Example              | Traditional voice (2G)     | Internet, LTE, 5G             |
| Delay                | Constant                   | Variable                      |

- GPRS introduced packet switching on GSM → called 2.5G
- From LTE onwards → **all-IP packet network**
- Voice also becomes packet (VoLTE / VoNR)

---

# 6. Network Function Virtualization (NFV)

### What is NFV?
- Traditional telecom functions (MME, SGW, PGW etc.) were running on dedicated hardware.
- NFV converts them into **software (Virtual Network Functions – VNFs)** that run on standard servers (x86).

### Benefits
- Lower CapEx and OpEx
- Faster deployment of new services
- Scalability (scale in/out easily)
- Vendor independence

### Related Concept
- **SDN (Software Defined Networking)**: Separates Control Plane from Data Plane
- NFV + SDN together make the network programmable and agile (key for 5G)

---

# 7. Cloud RAN (C-RAN) & Open RAN (O-RAN)

### C-RAN (Cloud Radio Access Network)
- Baseband processing is moved to a central cloud (BBU pool)
- Only Radio Unit (RRH) stays at the site
- Benefits: Resource pooling, better interference coordination (CoMP), energy saving

### O-RAN (Open Radio Access Network)
- Goal: Break vendor lock-in
- Uses **open interfaces** so equipment from different vendors can work together
- Functional split: RU (Radio Unit) – DU (Distributed Unit) – CU (Central Unit)
- Important open interfaces: Open Fronthaul, O1, A1, E2

### Remember
C-RAN = centralization of baseband  
O-RAN = openness + multi-vendor + intelligent control

---

# 8. 5G Network Slicing

### Definition
Network Slicing allows creation of multiple **logical networks** on the same physical infrastructure, each optimized for different services.

### Three Main 5G Use Cases
| Use Case | Full Form                              | Requirement                  |
|----------|----------------------------------------|------------------------------|
| eMBB     | enhanced Mobile Broadband              | High data rate               |
| URLLC    | Ultra-Reliable Low Latency Communication | Latency ~1 ms, high reliability |
| mMTC     | massive Machine Type Communication     | Huge number of devices       |

### Key Term
- **S-NSSAI** (Single Network Slice Selection Assistance Information): Identifies a slice
  - Contains SST (Slice/Service Type) + SD (Slice Differentiator)

---

# 9. Packet Switching and Call Control

- In packet networks, call/session control is done by signaling protocols.
- **SIP (Session Initiation Protocol)** is the main protocol for VoLTE and IMS.
- SIP is used for:
  - Session establishment
  - Modification
  - Termination
- Other important protocols: Diameter (for authentication/charging), GTP (user tunneling)

---

# 10. Evolution from Circuit Switching to Packet Core (EPC & 5GC)

### From Circuit to Packet
- 2G: Pure Circuit Switched voice
- 2.5G/3G: Circuit voice + Packet data
- 4G (EPC): Pure Packet Core → Voice moves to IMS (VoLTE)
- 5G (5GC): Service-Based Architecture + CUPS

### EPC Main Nodes
- **MME**: Mobility Management Entity (control plane)
- **SGW**: Serving Gateway
- **PGW**: Packet Data Network Gateway
- **HSS**: Home Subscriber Server

### 5GC Main Nodes
- **AMF**: Access and Mobility Management Function
- **SMF**: Session Management Function
- **UPF**: User Plane Function
- **AUSF**: Authentication Server Function
- **UDM**: Unified Data Management

### CUPS (Control and User Plane Separation)
- Control Plane and User Plane can be scaled and located independently
- UPF can be placed at the edge for low latency

---

# 11. Call Flow, Session Management, and Mobility Control

### Important Procedures
1. **Attach / Registration**: UE connects to network → Authentication → IP allocation → Default Bearer/Session
2. **Tracking Area Update (TAU) / Registration Update**: When UE moves to a new Tracking Area
3. **Handover**: X2 (direct between eNodeBs) or S1 (via MME)
4. **Session Management**: Creation, modification, release of PDU sessions (5G) or Bearers (4G)

### Key Identifiers
- IMSI, GUTI, TMSI, IMEI, MSISDN

---

# 12. IMS Architecture for Voice and Multimedia

### IMS = IP Multimedia Subsystem
- Standardized architecture for delivering voice, video, messaging over IP

### Main CSCF Nodes
- **P-CSCF**: Proxy – first contact point for UE
- **I-CSCF**: Interrogating – finds the correct S-CSCF
- **S-CSCF**: Serving – main session control and service execution

### Other Important Elements
- HSS, AS (Application Server), MRF (Media Resource Function)

### VoLTE
- Voice over LTE uses IMS
- Uses dedicated QCI=1 bearer for voice (Guaranteed Bit Rate)

---

# 13. Mobile User Data Management & Authentication

### Authentication
- Based on shared secret key **Ki** stored in SIM and in AuC/HSS
- Method: Challenge-Response (AKA – Authentication and Key Agreement)
- Mutual authentication in 3G/4G/5G

### Important Identities
| Identity | Full Form                              | Purpose                        |
|----------|----------------------------------------|--------------------------------|
| IMSI     | International Mobile Subscriber Identity | Unique subscriber ID         |
| MSISDN   | Mobile Station ISDN Number             | Phone number                   |
| IMEI     | International Mobile Equipment Identity | Device identity                |
| GUTI     | Globally Unique Temporary Identifier   | Temporary ID for privacy       |

---

# 14. HLR, HSS, and Registry Systems

| System | Generation | Function |
|--------|------------|----------|
| **HLR** | 2G/3G     | Home Location Register – permanent subscriber data + current location |
| **VLR** | 2G/3G     | Visitor Location Register – temporary data of subscribers in that area |
| **HSS** | 4G/5G     | Home Subscriber Server – combines HLR + AuC functions |
| **EIR** | All       | Equipment Identity Register – checks blacklisted IMEI |
| **UDM** | 5G        | Unified Data Management |

---

# 15. Power System for Telecom

### Standard Power System at BTS/Site
- **-48 V DC** is the standard voltage in telecom
- Components:
  - Rectifier (AC → DC)
  - Battery Bank (backup)
  - Diesel Generator (long outage)
  - Solar (optional, green energy)
- Why –48 V?
  - Reduces corrosion
  - Safer for humans
  - Industry standard worldwide

### Battery Autonomy
- Usually 3–8 hours depending on site criticality

---

# 16. Scripting for Simulation, Modeling and Configuration

### Common Tools & Languages
- **Planning & Simulation**: Atoll, Planet, MATLAB, NS-3
- **Automation & Configuration**: Python, Bash, Perl
- **Drive Test Analysis**: Actix, Nemo, TEMS + Python (Pandas)
- Why scripting is important:
  - Bulk parameter change
  - Consistency check
  - Report generation
  - Health monitoring automation

---

# 17. Telecom Industry of Bangladesh

### Mobile Operators (as of recent data)
| Operator       | Approx. Subscribers | Market Position |
|----------------|---------------------|-----------------|
| Grameenphone   | ~86+ million        | Largest         |
| Robi Axiata    | ~58+ million        | 2nd             |
| Banglalink     | ~37+ million        | 3rd             |
| Teletalk       | ~6–7 million        | State-owned     |

### Regulator
- **BTRC** – Bangladesh Telecommunication Regulatory Commission
  - Issues licenses
  - Allocates spectrum
  - Monitors Quality of Service
  - Sets tariff guidelines

### Key Facts for MCQ
- 4 mobile operators in Bangladesh
- Spectrum is allocated by BTRC through auction
- 4G is widely deployed; 5G is in limited/trial commercial stage
- Number prefixes help identify operators (017 = GP, 016 = Robi, 015 = Banglalink, 015/011 = Teletalk etc.)

---

# 18. Communication Skill Related Topics

### For Technical Professionals
- Explain complex technical issues in **simple language**
- Structure of a good technical report / presentation:
  1. Problem statement
  2. Impact
  3. Root cause analysis
  4. Solution options
  5. Recommendation & next steps
- Always know your **audience** (technical vs management)
- Use data and clear visuals
- Be concise and action-oriented

---

# 19. Aptitude Related (Technical Aptitude)

### Common Calculation Areas
- Frequency ↔ Wavelength
- Cluster size and total channels
- Link budget (Tx power + gains – losses – sensitivity)
- Erlang traffic calculations (basic)
- Path loss estimation
- Capacity estimation (channels × sectors × carriers)

### Quick Formulas to Remember
- \( \lambda = \frac{c}{f} \)
- Total channels in system = Channels per cell × Cluster size (N)
- Reuse factor = 1/N
- Received Power (dBm) ≈ Tx Power + Antenna Gains – Path Loss – Other Losses

---

# Final Quick Revision Checklist

Before the exam, make sure you can answer these in English:

1. What is frequency reuse and why is it used?
2. Difference between Hard and Soft Handoff
3. Main nodes of EPC and 5GC
4. What is Network Slicing and S-NSSAI?
5. Purpose of NFV and O-RAN
6. Difference between HLR and HSS
7. Why –48V DC is used in telecom?
8. Name the four mobile operators in Bangladesh and the regulator
9. What is SIP used for?
10. What is CUPS in 5G?

---

**শুভকামনা!**  
এই নোটগুলো ভালো করে পড়লে সিলেবাসের যেকোনো টপিক থেকে ইংরেজি MCQ এলে আপনি confidently উত্তর দিতে পারবেন।

যদি কোনো টপিকে আরও গভীর নোট বা অতিরিক্ত MCQ লাগে, জানাবেন।
