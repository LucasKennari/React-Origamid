import React from 'react'

const Input = ({ label, id, ...props }) => {
          return (
                    <div style={{ margin: '1rem 0' }}>
                              <label style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        backgroundColor: "#9741E8 ",
                                        color: "#E8EEFF",
                                        width: "55px",
                                        borderRadius: "5px 5px 0px 0px",
                                        margin: "0px"
                              }}

                                        htmlFor={id}>{label}</label>
                              <input id={id}
                                        type='text' {...props} />
                    </div>


          )
}

export default Input
