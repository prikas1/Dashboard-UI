import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import "./rightPortion.css";

export function TableRow(props) {
    return (
        <tr>
            <td className='brand-td'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <input className='checkbox' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <img className='profil-img first' src={props.brandLogo} />
                        <p>{props.brandName}</p>
                    </div>
                    <p className='icon-p'><i className="fa-solid fa-window-restore"></i> 2</p>
                </div>
            </td>
            <td>{props.discription}</td>
            <td className='img-td'>
                <img className='profil-img first' src={props.member1}></img>
                <img className='profil-img' src={props.member2}></img>
                <img className='profil-img' src={props.member3}></img>
            </td>
            <td className='category-td'>
                <a >{props.category}</a>
                <a >B2B</a>
            </td>
            <td className='tag-td'>
                <a >{props.tags}</a>
                <a >#</a>
            </td>
            <td className='nextmeeting-td'>
                <a >{props.nextMeeting}</a>
            </td>
            <td></td>
        </tr>
    );
}

export function TableRowEnd() {
    return (
        <tr className='end-tr'>
            <td className='end-td brand-td'>
                <div className='end-tr-div'>
                    <a >10 court</a> 
                </div>
            </td>
            <td className='end-td disc-td'>
                <div className='end-tr-div'>
                    <a >+ Add calculation</a>
                </div>
            </td>
            <td className='end-td img-td '>
                <div className='end-tr-div'>
                    <a >+ Add calculation</a>
                </div>
            </td>
            <td className='end-td category-td'>
                <div className='end-tr-div'>
                    <a >+ Add calculation</a>
                </div>
            </td>
            <td className='end-td tag-td'>
                <div className='end-tr-div'>
                    <a >+ Add calculation</a>
                </div>    
            </td>
            <td className='end-td nextmeeting-td'></td>
            <td className='end-td plus-td'></td>
        </tr>
    );
}
