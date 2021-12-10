import React from 'react';
import {url} from '../../helpers/url'

const Info = () => {
    const [equipos, setEquipos] = React.useState([])

    React.useEffect(()=>{

    })
    return (
        <div>
            <table>
            <thead>
                <tr>
                <th>Month</th>
                <th>Savings</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>January</td>
                <td>$100</td>
                </tr>
                <tr>
                <td>February</td>
                <td>$80</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default Info;