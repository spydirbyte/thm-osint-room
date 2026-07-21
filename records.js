const records = [
  {
    name: "Daniel R. Osgood",
    type: "Property Record",
    caseNum: "PR-2019-04471",
    detail: "Single-family residence, Wright County. Assessed value $184,200. No liens on file."
  },
  {
    name: "Kettlewood Farms LLC",
    type: "Business License",
    caseNum: "BL-2021-00982",
    detail: "Agricultural business license, renewed annually since 2015. No violations on record."
  },
  {
    name: "Norrgate Structural Consulting",
    type: "Business License / Lien Filing",
    caseNum: "BL-2018-03357",
    detail: "DBA registered under sole proprietor Marcus A. Webb. Filed address: 118 Birchwood Lane, St. Cloud, MN 56301. A mechanic's lien was filed and later released in 2022 related to unpaid equipment storage fees at this address. No other filings associated with this business."
  },
  {
    name: "Priya Anand",
    type: "Court Filing",
    caseNum: "CV-2020-11923",
    detail: "Small claims, resolved. Dispute over contractor invoice, dismissed with prejudice."
  },
  {
    name: "Wright County Sand & Gravel",
    type: "Business License",
    caseNum: "BL-2016-00214",
    detail: "Active. No violations. Renewed through 2027."
  },
  {
    name: "Gerald Thomsen",
    type: "Property Record",
    caseNum: "PR-2022-00567",
    detail: "Commercial property, Clearwater township. Assessed value $412,000."
  },
  {
    name: "Rosalie Fenn",
    type: "Court Filing",
    caseNum: "CV-2018-00871",
    detail: "Small claims, dismissed. Landlord-tenant dispute."
  },
  {
    name: "Timber Ridge Excavation LLC",
    type: "Business License",
    caseNum: "BL-2019-01145",
    detail: "Active. Renewed through 2026. No violations on record."
  },
  {
  name: "Webb Family Trust",
  type: "Property Record",
  caseNum: "PR-2011-08834",
  detail: "Lake cabin property, Clearwater township, inherited 2011. Assessed value $96,500. Listed owner: Marcus A. Webb, trustee. No liens on file. Property tax current through 2026."
},
{
  name: "Fenwick Ridge Development",
  type: "Inspection Filing / Code Violation",
  caseNum: "IV-2024-00219",
  detail: "Structural inspection filed by M. Webb, freelance inspector. Site located 
  adjacent to the former Halvorsen quarry. Report notes foundation constructed on 
  unconsolidated fill rather than bedrock, three critical load-bearing violations 
  identified. Developer appeal filed same week; violations reclassified as 'minor' 
  by second inspector. Original report sealed pending review."
},
{
  name: "Fenwick Ridge Holdings LLC",
  type: "Business Registration",
  caseNum: "SOS-2019-77241",
  detail: "Registered agent: Calloway & Voss Law Group. Managing member: Dale Renner. 
  Secondary structural review performed by contracted inspector J. Pruitt, License 
  #4471, reclassifying violations from critical to minor within 48 hours of the 
  developer's appeal filing."
}
];

function doSearch() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (!query) return;

  const matches = records.filter(r =>
    r.name.toLowerCase().includes(query) ||
    r.caseNum.toLowerCase().includes(query) ||
    r.detail.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsDiv.innerHTML = '<p class="no-results">No records found matching your search.</p>';
    return;
  }

  matches.forEach(r => {
    const div = document.createElement('div');
    div.className = 'result';
    div.innerHTML = `
      <h3>${r.name}</h3>
      <div class="meta">${r.type} &middot; Case #${r.caseNum}</div>
      <div class="detail">${r.detail}</div>
    `;
    resultsDiv.appendChild(div);
  });
}

document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') doSearch();
});
