import './Results.css';

import TableData from './TableData/TableData';
import { calculateInvestmentResults } from '../../util/investment';

function Results({ initialInvestment, annualInvestment, expectedReturn, duration }) {

    const headers = ['Year', 'Investment Value', 'Interest (Year)', 'Total Interest', 'Invested Capital'];

    console.log(initialInvestment, annualInvestment, expectedReturn, duration);

    const results = calculateInvestmentResults({
        initialInvestment: Number(initialInvestment),
        annualInvestment: Number(annualInvestment),
        expectedReturn: Number(expectedReturn),
        duration: Number(duration),
    });

    function calculateTotalInterest(results, yearOfInterest) {
        let totalInterest = 0;

        for (const { interest, year } of results) {
            if (year <= yearOfInterest) {
                totalInterest += interest;
            }
        }
        return totalInterest;
    }

    function calculateInvestedCapital(investmentValue, totalInterest) {
        return investmentValue + totalInterest;
    }

    console.log(results);

    return (
        <table id="result">
            <thead>
                <tr>
                    {headers.map(header => <th key={header}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    results.map(
                        result => (
                            <tr key={result.year}>
                                <TableData format={false}>{result.year}</TableData>
                                <TableData>{result.valueEndOfYear}</TableData>
                                <TableData>{result.interest}</TableData>
                                <TableData>{calculateTotalInterest(results, result.year)}</TableData>
                                <TableData>{calculateInvestedCapital(result.valueEndOfYear, calculateTotalInterest(results, result.year))}</TableData>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default Results;