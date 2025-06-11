document.getElementById("loanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const income = parseFloat(document.getElementById("income").value);
    const coincome = parseFloat(document.getElementById("coincome").value);
    const loan = parseFloat(document.getElementById("loan").value);
    const term = parseInt(document.getElementById("term").value);
    const credit = document.getElementById("credit").value;
    const gender = document.getElementById("gender").value;
    const married = document.getElementById("married").value;
    const education = document.getElementById("education").value;
    const selfemployed = document.getElementById("selfemployed").value;

    const resultDiv = document.getElementById("result");

    // Check age condition
    if (age < 18) {
        resultDiv.style.color = "red";
        resultDiv.textContent = `Sorry, ${name}. Loan cannot be approved for applicants under 18 years old.`;
        return;
    }

    // Simple prediction logic (just an example)
    // For demo: Approve loan if credit history is good AND income + co-income is sufficient compared to loan amount
    const totalIncome = income + coincome;
    const loanEligibleAmount = loan * 0.1; // example condition

    if (credit === "1" && totalIncome > loanEligibleAmount) {
        resultDiv.style.color = "green";
        resultDiv.textContent = `Congratulations, ${name}! Your loan is likely to be approved.`;
    } else {
        resultDiv.style.color = "red";
        resultDiv.textContent = `Sorry, ${name}. Your loan application is likely to be rejected.`;
    }
});
