import React,{useState} from 'react'
import defaultUserImg from '../Images/product.png';
import {storage, db } from '../firebaseConfig';
import {Alert} from 'react-bootstrap';
import '../styles/AddProductStyle.css';



function AddProduct() {

    const [error, setError] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productCaption, setProductCaption] = useState("");
    const [productImg, setProductImg] = useState(defaultUserImg);
    const [ImgScr, setImgScr] = useState(defaultUserImg);
    const [selectedFileName,setFileName] = useState('');
    const types = ['image/png','image/jpeg','image/jpg']

    

    const productImgHandler = (e) =>{

        let selectedFile = e.target.files[0];
        const reader = new FileReader();
        console.log(selectedFile);
        if(selectedFile && types.includes(selectedFile.type)){
            setProductImg(selectedFile);
            setImgScr(selectedFile);
            setFileName(selectedFile.name);
            console.log(selectedFileName);

            const urlLink = reader.readAsDataURL(selectedFile);

            reader.onloadend = function (e) {
                setProductImg(reader.result);
            }.bind(this);
            console.log(urlLink);
            setError('');
        }
        else{
            setProductImg(defaultUserImg);
            setError('Please select a valid image type png/jpeg');
        }
    }

    const addProduct = (e) =>{
        e.preventDefault();
        console.log(productImg);
        window.alert(selectedFileName);
        storage.ref(`/product-Images/${selectedFileName}`).put(ImgScr).on('state_changed', (sanpshot) => {
            const progress = (sanpshot.bytesTransferred/sanpshot.totalBytes)*100;
            console.log(progress);
        },(err) =>{
            setError(err.message)
        },()=>{
            storage.ref('product-Images').child(selectedFileName).getDownloadURL().then(url =>{
                db.collection('Product').add({
                    productName : productName,
                    productPrice : Number(productPrice),
                    productImg : url,
                    productCaption :productCaption

                }).then(() => {
                    setProductName('');
                    setProductPrice(0);
                    setProductImg(defaultUserImg);
                    setProductCaption('');
                    setError('');
                    document.getElementById('file').value ='';

                }).catch(err => setError(err.message));
            })
        })
    }
    return (
        <>
            <section className="product_bg">
            <div className="addProduct_container">
                {error && <Alert variant="danger">{error}</Alert>}
                <h2>Add Product</h2>
                <hr /> 
                <br/>
                <form className="form-group" autoComplete ="off" onSubmit={addProduct} >
                    <section style={{display:'flex',flexDirection:'row'}}>
                        <aside style={{float:'left',display:'flex',flexDirection:'column'}}>
                        <label htmlFor="product-img"></label>
                            <img id="current-product-image" style={{width:'16rem', height:'13rem'}} name = "current-product-image" width ="200rem" src={productImg} />
                            <br />
                            <input type="file" id= "file" className="form-control" onChange = {productImgHandler} />
                        </aside>
                        <section>
                            <label htmlFor="product-name" className="mov_right" >Product Name</label>
                            <input type="text" style={{width : '20rem'}} className="form-control mov_right" required onChange = {(e) => setProductName(e.target.value)} value={productName} />
                            <br/>
                            <label htmlFor="product-price" className="mov_right" >Price</label>
                            <input type="number" className="form-control mov_right" required onChange = {(e) => setProductPrice(e.target.value)} value={productPrice} />
                        </section>
                    </section>
                    <br/>
                        <label htmlFor="product-caption" >Caption</label>
                        <input type="text" className="form-control" required onChange = {(e) => setProductCaption(e.target.value)} value={productCaption} />
                        <br/>
                        <input type="submit" className ="add_btn" value ="ADD" />
                </form>
                
            </div>
            </section>
        </>
    )
}

export default AddProduct;

