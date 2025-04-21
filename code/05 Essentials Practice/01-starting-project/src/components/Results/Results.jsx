import './Results.css';

import TableData from './TableData/TableData';
import { calculateInvestmentResults } from '../../util/investment';

function Results({ initialInvestment, annualInvestment, expectedReturn, duration }) {

    const headers = ['Year', 'Investment Value', 'Interest (Year)', 'Total Interest', 'Invested Capital'];

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
                        result => {
                            const totalInterest = calculateTotalInterest(results, result.year);
                            return (
                                <tr key={result.year}>
                                    <TableData format={false}>{result.year}</TableData>
                                    <TableData>{result.valueEndOfYear}</TableData>
                                    <TableData>{result.interest}</TableData>
                                    <TableData>{totalInterest}</TableData>
                                    <TableData>{calculateInvestedCapital(result.valueEndOfYear, totalInterest)}</TableData>
                                </tr>
                            );
                        }
                    )
                }
            </tbody>
        </table>
    )
}

export default Results;