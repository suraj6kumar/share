document.getElementById("shareForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const profit = parseFloat(document.getElementById("profit").value);
  
    const names = [
      document.getElementById("name1").value,
      document.getElementById("name2").value,
      document.getElementById("name3").value,
      document.getElementById("name4").value,
    ];
  
    const investments = [
      parseFloat(document.getElementById("investment1").value),
      parseFloat(document.getElementById("investment2").value),
      parseFloat(document.getElementById("investment3").value),
      parseFloat(document.getElementById("investment4").value),
    ];
  
    const totalInvestment = investments.reduce((a, b) => a + b, 0);
  
    let resultHTML = `<h3>Profit Distribution</h3><ul>`;
    names.forEach((name, index) => {
      const share = (investments[index] / totalInvestment) * profit;
      resultHTML += `<li><strong>${name}</strong> - Investment: ₹${investments[index]} | Profit Share: ₹${share.toFixed(2)}</li>`;
    });
    resultHTML += `</ul>`;
  
    document.getElementById("result").innerHTML = resultHTML;
  });
  
  // Print button
  document.getElementById("printBtn").addEventListener("click", function () {
    const result = document.getElementById("result").innerHTML;
  
    if (result.trim()) {
      const printWindow = window.open('', '', 'width=600,height=400');
      printWindow.document.write(`<html><head><title>Profit Share Report</title></head><body>`);
      printWindow.document.write(result);
      printWindow.document.write(`</body></html>`);
      printWindow.document.close();
      printWindow.print();
    } else {
      alert("Please calculate profit shares before printing.");
    }
  });
  