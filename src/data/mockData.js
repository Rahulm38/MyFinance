export const USERS = {
  personal: {
    pan: "ABCPS1234D", password: "1234",
    name: "Rajesh Sharma", email: "rajesh.sharma@gmail.com", mobile: "98765 43210",
    caName: "CA Priya Mehta", caFirm: "Mehta & Associates",
    creditScore: 742, creditRating: "Good",
    income: "₹18,40,000", taxPaid: "₹2,84,500", refundDue: "₹12,400", refundStatus: "Processing",
    ay: "AY 2024-25",
  },
  business: {
    pan: "AACES1234B", password: "5678",
    name: "Sharma Enterprises Pvt Ltd", owner: "Rajesh Sharma",
    email: "accounts@sharmaenterprises.com", mobile: "98765 43211",
    caName: "CA Priya Mehta", caFirm: "Mehta & Associates",
    gstin: "27AACES1234B1Z5", cin: "U74999MH2020PTC123456",
    turnover: "₹2,40,00,000", gstPayable: "₹3,20,000", tdsPayable: "₹84,000", netProfit: "₹38,40,000",
    ay: "AY 2024-25",
  }
};

export const PERSONAL_DOCS = {
  "Tax & Income": [
    { id:"p1", name:"Form 16", sub:"FY 2023-24 · Employer: TCS Ltd", size:"245 KB", date:"May 2024", badge:"New" },
    { id:"p2", name:"ITR-1 Acknowledgement", sub:"FY 2023-24 · Filed by CA", size:"180 KB", date:"Jul 2024", badge:"New" },
    { id:"p3", name:"ITR-1 Acknowledgement", sub:"FY 2022-23 · Verified", size:"175 KB", date:"Aug 2023", badge:null },
    { id:"p4", name:"Form 26AS", sub:"AY 2024-25 · Tax Credit Statement", size:"320 KB", date:"Jun 2024", badge:null },
    { id:"p5", name:"AIS Report", sub:"AY 2024-25 · Annual Info Statement", size:"280 KB", date:"Jun 2024", badge:null },
    { id:"p6", name:"Income Tax Computation", sub:"FY 2023-24 · By CA Priya Mehta", size:"95 KB", date:"Jul 2024", badge:"New" },
  ],
  "Salary Slips": [
    { id:"p7", name:"Salary Slip — March 2024", sub:"TCS Ltd · Net Pay: ₹1,12,500", size:"45 KB", date:"Mar 2024", badge:"New" },
    { id:"p8", name:"Salary Slip — February 2024", sub:"TCS Ltd · Net Pay: ₹1,12,500", size:"45 KB", date:"Feb 2024", badge:null },
    { id:"p9", name:"Salary Slip — January 2024", sub:"TCS Ltd · Net Pay: ₹1,09,800", size:"45 KB", date:"Jan 2024", badge:null },
    { id:"p10", name:"Salary Slip — December 2023", sub:"TCS Ltd · Net Pay: ₹1,09,800", size:"45 KB", date:"Dec 2023", badge:null },
    { id:"p11", name:"Salary Slip — November 2023", sub:"TCS Ltd · Net Pay: ₹1,09,800", size:"45 KB", date:"Nov 2023", badge:null },
  ],
  "Investments & 80C": [
    { id:"p12", name:"PPF Account Statement", sub:"SBI PPF · Balance: ₹8,40,000", size:"120 KB", date:"Mar 2024", badge:null },
    { id:"p13", name:"ELSS Statement", sub:"Axis Mutual Fund · ₹1,50,000 invested", size:"95 KB", date:"Mar 2024", badge:null },
    { id:"p14", name:"LIC Premium Receipt", sub:"Policy No: 123456789 · FY 2023-24", size:"55 KB", date:"Dec 2023", badge:null },
    { id:"p15", name:"NPS Statement", sub:"PRAN: 110045678901 · FY 2023-24", size:"130 KB", date:"Mar 2024", badge:null },
    { id:"p16", name:"Bank FD Certificate", sub:"SBI · ₹5,00,000 at 7.25% p.a.", size:"40 KB", date:"Jun 2023", badge:null },
    { id:"p17", name:"80C Investment Summary", sub:"FY 2023-24 · Total deduction: ₹1,50,000", size:"65 KB", date:"Mar 2024", badge:null },
  ],
  "Personal KYC": [
    { id:"p18", name:"PAN Card Copy", sub:"ABCPS1234D", size:"85 KB", date:"Permanent", badge:null },
    { id:"p19", name:"Aadhaar Card Copy", sub:"XXXX XXXX 4321 (Masked)", size:"90 KB", date:"Permanent", badge:null },
    { id:"p20", name:"Passport Copy", sub:"T1234567 · Valid till Mar 2030", size:"120 KB", date:"Permanent", badge:null },
    { id:"p21", name:"Bank Statement FY 2023-24", sub:"SBI Savings A/c · Apr 23 – Mar 24", size:"245 KB", date:"Mar 2024", badge:null },
  ]
};

export const BUSINESS_DOCS = {
  "GST Returns": [
    { id:"b1", name:"GSTR-3B — March 2024", sub:"27AACES1234B1Z5 · Filed ✓ Apr 2024", size:"165 KB", date:"Apr 2024", badge:"New" },
    { id:"b2", name:"GSTR-1 — March 2024", sub:"Outward Supplies · Filed ✓ Apr 2024", size:"280 KB", date:"Apr 2024", badge:"New" },
    { id:"b3", name:"GSTR-3B — February 2024", sub:"Filed ✓ · No Late Fee", size:"158 KB", date:"Mar 2024", badge:null },
    { id:"b4", name:"GSTR-9 Annual Return", sub:"FY 2022-23 · Filed Dec 2023", size:"420 KB", date:"Dec 2023", badge:null },
    { id:"b5", name:"GST Registration Certificate", sub:"REG-06 · Issued: Jan 2020 · Active", size:"95 KB", date:"Permanent", badge:null },
  ],
  "Licences & Reg.": [
    { id:"b6", name:"Shop & Establishment Cert.", sub:"Reg No: MH-MUM-2020-1234 · Mumbai", size:"80 KB", date:"2020", badge:null },
    { id:"b7", name:"Certificate of Incorporation", sub:"CIN: U74999MH2020PTC123456", size:"110 KB", date:"Jan 2020", badge:null },
    { id:"b8", name:"Udyam (MSME) Certificate", sub:"UDYAM-MH-01-0012345 · Small Enterprise", size:"75 KB", date:"Aug 2020", badge:null },
    { id:"b9", name:"Professional Tax Certificate", sub:"PT Enrolment No: 27123456", size:"55 KB", date:"2020", badge:null },
    { id:"b10", name:"MOA & AOA", sub:"Memorandum & Articles of Association", size:"380 KB", date:"Jan 2020", badge:null },
    { id:"b11", name:"Trade Licence", sub:"No: MH/TL/2020/5678 · Valid Dec 2024", size:"65 KB", date:"2020", badge:null },
  ],
  "Tax & TDS": [
    { id:"b12", name:"ITR-6 Acknowledgement", sub:"FY 2023-24 · Filed by CA Priya Mehta", size:"195 KB", date:"Oct 2024", badge:"New" },
    { id:"b13", name:"Tax Audit Report (Form 3CD)", sub:"FY 2023-24 · CA Priya Mehta", size:"520 KB", date:"Sep 2024", badge:"New" },
    { id:"b14", name:"TDS Return 26Q — Q4 FY24", sub:"Jan–Mar 2024 · Filed ✓", size:"145 KB", date:"May 2024", badge:null },
    { id:"b15", name:"TDS Return 26Q — Q3 FY24", sub:"Oct–Dec 2023 · Filed ✓", size:"138 KB", date:"Jan 2024", badge:null },
    { id:"b16", name:"Advance Tax Challan Q4", sub:"FY 2023-24 · ₹85,000 paid", size:"45 KB", date:"Mar 2024", badge:null },
    { id:"b17", name:"Form AOC-4 (MCA Filing)", sub:"FY 2022-23 · Filed ✓ Oct 2023", size:"215 KB", date:"Oct 2023", badge:null },
  ],
  "Financials": [
    { id:"b18", name:"Balance Sheet FY 2023-24", sub:"As on 31st March 2024", size:"285 KB", date:"Sep 2024", badge:"New" },
    { id:"b19", name:"Profit & Loss Statement", sub:"FY 2023-24 · Net Profit: ₹38.4 Lakhs", size:"215 KB", date:"Sep 2024", badge:"New" },
    { id:"b20", name:"Cash Flow Statement", sub:"FY 2023-24", size:"165 KB", date:"Sep 2024", badge:"New" },
    { id:"b21", name:"Statutory Audit Report", sub:"FY 2022-23 · By CA Priya Mehta", size:"445 KB", date:"Oct 2023", badge:null },
  ]
};

export const PERSONAL_LOANS = [
  { id:"l1", bank:"HDFC Bank", type:"Personal Loan", rate:"10.85% p.a.", max:"Up to ₹40 Lakhs", tenure:"5 years", processing:"1% of loan", eligible:true, tag:"Best Match", col:"#004C97" },
  { id:"l2", bank:"State Bank of India", type:"Home Loan", rate:"8.50% p.a.", max:"Up to ₹1.5 Crore", tenure:"30 years", processing:"₹10,000 flat", eligible:true, tag:"Lowest Rate", col:"#22408C" },
  { id:"l3", bank:"ICICI Bank", type:"Loan Against Property", rate:"9.25% p.a.", max:"Up to ₹5 Crore", tenure:"20 years", processing:"0.50% of loan", eligible:true, tag:null, col:"#B02A30" },
  { id:"l4", bank:"Axis Bank", type:"Education Loan", rate:"11.00% p.a.", max:"Up to ₹75 Lakhs", tenure:"15 years", processing:"Nil", eligible:false, tag:null, col:"#97144D" },
];

export const BUSINESS_LOANS = [
  { id:"bl1", bank:"SBI", type:"Business Term Loan", rate:"11.25% p.a.", max:"Up to ₹2 Crore", tenure:"5 years", processing:"1%", eligible:true, tag:"Best Match", col:"#22408C" },
  { id:"bl2", bank:"HDFC Bank", type:"Working Capital Loan", rate:"13.50% p.a.", max:"Up to ₹50 Lakhs", tenure:"12 months", processing:"₹5,000 flat", eligible:true, tag:null, col:"#004C97" },
  { id:"bl3", bank:"ICICI Bank", type:"Equipment Finance", rate:"10.50% p.a.", max:"Up to ₹1 Crore", tenure:"5 years", processing:"0.50%", eligible:true, tag:null, col:"#B02A30" },
  { id:"bl4", bank:"Axis Bank", type:"Overdraft Facility", rate:"12.00% p.a.", max:"Up to ₹25 Lakhs", tenure:"Renewable yearly", processing:"Nil", eligible:false, tag:null, col:"#97144D" },
];

export const CREDIT_FACTORS = [
  { label:"Payment History", score:92, col:"#059669" },
  { label:"Credit Utilisation", score:68, col:"#d97706" },
  { label:"Credit Age", score:74, col:"#059669" },
  { label:"Credit Mix", score:80, col:"#059669" },
  { label:"New Enquiries", score:85, col:"#059669" },
];

export const REPORTS = {
  personal: [
    { id:"r1", name:"Tax Summary Report", desc:"Income, deductions, tax paid & refund due for the year", period:"FY 2023-24", icon:"📋", pages:4 },
    { id:"r2", name:"Investment Portfolio Report", desc:"All 80C, 80D investments and estimated returns", period:"FY 2023-24", icon:"💰", pages:6 },
    { id:"r3", name:"Quarterly TDS Report", desc:"TDS deducted by employer, quarter-wise breakdown", period:"Q4 FY 2023-24", icon:"📊", pages:2 },
    { id:"r4", name:"Annual Income Statement", desc:"Salary, interest, capital gains — full year summary", period:"FY 2023-24", icon:"📈", pages:3 },
    { id:"r5", name:"80C Savings Certificate", desc:"Proof of tax-saving investments for bank or employer", period:"FY 2023-24", icon:"🏦", pages:1 },
  ],
  business: [
    { id:"r6", name:"GST Quarterly Report", desc:"Sales, purchases, ITC claimed & net GST paid", period:"Q4 FY 2023-24", icon:"🧾", pages:5 },
    { id:"r7", name:"TDS Compliance Report", desc:"TDS deducted, deposited & all quarterly returns filed", period:"Q4 FY 2023-24", icon:"✅", pages:4 },
    { id:"r8", name:"P&L Summary Report", desc:"Revenue, expenses & net profit for the full year", period:"FY 2023-24", icon:"📊", pages:3 },
    { id:"r9", name:"Compliance Calendar Report", desc:"All past filings done & upcoming due dates", period:"FY 2024-25", icon:"📅", pages:2 },
    { id:"r10", name:"Director's Report Summary", desc:"Key highlights for board meetings and AGM", period:"FY 2023-24", icon:"📝", pages:4 },
  ]
};
