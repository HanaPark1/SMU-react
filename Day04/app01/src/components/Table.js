import { useState } from "react";
import '../css/Style.css'

const Table = () => {
    return (
        <table>
            <tr className="tr01">
                <th>번호</th>
                <th>이름</th>
                <th>아이디</th>
            </tr>
            <tr className="tr01">
                <td>1</td>
                <td>하나</td>
                <td>aaa</td>
            </tr>
            <tr className="tr01">
                <td>2</td>
                <td>두나</td>
                <td>bbb</td>
            </tr>
        </table>
    )
}

export default Table;