const UploadProduct = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [condition, setCondition] = useState("");
    const [postDate, setPostDate] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [ownerID, setOwnerID] = useState("");
    const [message, setMessage] = useState("")
    const [fileName, setFileName] = useState("");
  
    const onChnageFile = e => {
      setFileName(e.target.file[0]);
    }
  
    const changeOnCheck = (e) => {
      e.preventDefault();
  
      const formData = new FormData();
  
      formData.append("productName", productName);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("productDescription", productDescription);
      formData.append("ownerID", ownerID);
      formData.append("fileName", fileName);
  
      setProductName("");
      setPrice(0);
      setCondition("");
      setPostDate(date);
      setProductDescription("");
      setOwnerID("");
  
      axios.post("/products/add", formData)
      .then((res)=> setMessage(res.data))
      .catch(err=> {console.log(err);}); 
    };
  };
  