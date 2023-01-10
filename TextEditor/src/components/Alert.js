import React from 'react'


export default function Alert(props) {

  //This function is created for Capitalizing 'S' (first letter) of "success"
  const capitalize= (word) => {
                const lower = word.toLowerCase();
                return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
        // setting height for 'About us' so alert doesn't effect it
        <div style={{height: '50px'}}>     
            {props.alert && <div className= {`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.typ)}</strong> : {props.alert.msg}
            </div>}
    </div>
  )
}
