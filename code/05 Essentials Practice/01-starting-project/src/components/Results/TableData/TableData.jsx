import { formatter } from '../../../util/investment';

function TableData({ children, format = true }) {
    return (
        <td>
            {format ? formatter.format(children) : children}
        </td>
    )
}

export default TableData;