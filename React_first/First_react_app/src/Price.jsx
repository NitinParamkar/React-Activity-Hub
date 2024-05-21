export default function Price({oldPrice, newPrice}){
    let styles={
        textDecorationLine: "line-through",
    }
    let newStyles={
        fontWeight: "bold",
    }
    let fashion={
        backgroundColor: "#e0c367",
        height: "30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    }
    return(
        <div style={fashion}>
            <span style={styles}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}