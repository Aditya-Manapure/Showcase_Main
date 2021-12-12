import React,{useState} from 'react'
import defaultUserImg from '../Images/defaultUserImg.png';
import {storage, db } from '../firebaseConfig';
import { useHistory } from 'react-router';
import {Alert} from 'react-bootstrap';
import '../styles/AddUserStyle.css';
import {useAuth} from '../Context/AuthContext';

function AddUserData() {

    const [error, setError] = useState("");
    const [userName, setUserName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [userBio, setUserBio] = useState("");
    const [userImg, setUserImg] = useState(defaultUserImg);
    const [ImgScr, setImgScr] = useState(defaultUserImg);
    const [selectedFileName,setFileName] = useState('');
    const types = ['image/png','image/jpeg','image/jpg']

    const history = useHistory();

    const {currentUser, updateprofile} = useAuth();

    const userImgHandler = (e) =>{

        let selectedFile = e.target.files[0];
        const reader = new FileReader();
        console.log(selectedFile);
        if(selectedFile && types.includes(selectedFile.type)){
            setUserImg(selectedFile);
            setImgScr(selectedFile);
            setFileName(selectedFile.name);
            console.log(selectedFileName);

            const urlLink = reader.readAsDataURL(selectedFile);

            reader.onloadend = function (e) {
                setUserImg(reader.result);
            }.bind(this);
            console.log(urlLink);
            setError('');
        }
        else{
            setUserImg(defaultUserImg);
            setError('Please select a valid image type png/jpeg');
        }
    }

    const userData = (e) =>{
        e.preventDefault();
        console.log(userImg);
        window.alert(selectedFileName);
        storage.ref(`/user-Images/${selectedFileName}`).put(ImgScr).on('state_changed', (sanpshot) => {
            const progress = (sanpshot.bytesTransferred/sanpshot.totalBytes)*100;
            console.log(progress);
        },(err) =>{
            setError(err.message)
        },()=>{
            storage.ref('user-Images').child(selectedFileName).getDownloadURL().then(url =>{
                db.collection('User').add({
                    userName : userName,
                    productPrice : Number(productPrice),
                    userImg : url,
                    userBio :userBio,
                    userEmail : currentUser.email
                }).then(() => {
                   updateprofile(userName , url)
                   // currentUser.displayName = userName;
                    //currentUser.photoURL = url;
                    //currentUser.phoneNumber = productPrice;

                    setUserName('');
                    setProductPrice(0);
                    setUserImg(defaultUserImg);
                    setUserBio('');
                    setError('');
                    document.getElementById('file').value ='';
                    history.push('/');

                }).catch(err => setError(err.message));
            })
        })
    }

    const skipUserData = (e) =>{
        e.preventDefault();
        console.log(userImg);
        window.alert('Skip');
        var name   = (currentUser.email).substring(0, currentUser.email.lastIndexOf("@"));
        var ImgName = 'defaultUserImg.png';
        console.log(name);
        {
            storage.ref('user-Images/').child(ImgName).getDownloadURL().then(url =>{
                db.collection('User').add({
                    userName : name,
                    productPrice : Number(productPrice),
                    userImg : url,
                    userBio :("I am using Showcase"),
                    userEmail : currentUser.email
                }).then(() => {
                    //currentUser.displayName = name;
                    //currentUser.photoURL = url;
                    //currentUser.phoneNumber = null;
                    updateprofile(name , url)
                    setUserName('');
                    setProductPrice(0);
                    setUserImg(defaultUserImg);
                    setUserBio('');
                    setError('');
                    document.getElementById('file').value ='';
                    history.push('/');

                }).catch(err => setError(err.message));
            })
        }
    }

    return (
        <>
            <section className="product_bg">
            <div className="addProduct_container">
                {error && <Alert variant="danger">{error}</Alert>}
                <h2>User </h2>
                <hr /> 
                <br/>
                <form className="form-group" autoComplete ="off" >
                    <section style={{display:'flex',flexDirection:'row'}}>
                        <aside style={{float:'left',display:'flex',flexDirection:'column'}}>
                        <label htmlFor="product-img"></label>
                            <img id="current-product-image" style={{width:'16rem', height:'13rem'}} name = "current-product-image" width ="200rem" src={userImg} />
                            <br />
                            <input type="file" id= "file" className="form-control" onChange = {userImgHandler} />
                        </aside>
                        <section>
                            <label htmlFor="product-name" className="mov_right" > Username</label>
                            <input type="text" style={{width : '20rem'}} className="form-control mov_right" required onChange = {(e) => setUserName(e.target.value)} value={userName} />
                            <br/>
                            <label htmlFor="product-price" className="mov_right" >Phone Number</label>
                            <input type="number" className="form-control mov_right" required onChange = {(e) => setProductPrice(e.target.value)} value={productPrice} />
                        </section>
                    </section>
                    <br/>
                        <label htmlFor="product-caption" >Caption</label>
                        <input type="text" className="form-control" required onChange = {(e) => setUserBio(e.target.value)} value={userBio} />
                        <br/>
                        <input type="submit" className ="add_btn" value ="ADD"  onClick={userData} />
                        <input type="submit" className = "skip_btn" value="Skip" onClick = {skipUserData} />
                </form>
                
            </div>
            </section>
        </>
    )
}

export default AddUserData;

