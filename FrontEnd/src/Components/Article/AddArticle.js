import React from 'react'
import { useState, useEffect, useRef } from 'react'
import {Dialog,TextInputField,Button} from 'evergreen-ui'
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import {storage} from '../../lib/firebase'
import {ref, uploadBytesResumable, getDownloadURL} from "@firebase/storage";
import {useForm} from 'react-hook-form'
import LinearProgress from '@mui/material/LinearProgress';
import {useQuery, useMutation, useQueryClient} from 'react-query'
import {addArticle, getAllArticle, deleteArticle,updateArticle} from '../../api/article'
import { Box, Typography } from '@material-ui/core';


registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


function AddArticle({setIsShown, isShown, setToast}) {

  const formRef = useRef()

  // const [addProduct] = useAddProductMutation();
  const [files, setFiles] = useState  ([]);
  const [progress, setProgress] = useState  (0);
  const {register, handleSubmit,watch,control, formState: {errors}, reset}= useForm()
  
  const submitForm = async (data) => {

    const storageRef = ref(storage, `/file/${files[0].file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, files[0].file)
    
    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100)
      setProgress(prog)
    }, (err) => console.log(err), () => {
      
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url);
        data.ArticleImage = url
        // addProduct(values)
          // .then(() => {
          //   refetch()
          //   prefetch()
          // })
          console.log(data)
          setIsShown(false)
          setFiles([])
          setToast(true)
         reset()
         setProgress(0)
        })
      })
  }


  return (
    <Dialog
      isShown={isShown}
      title="Ajouter un article"
      onCloseComplete={() => setIsShown(false)}
      width={600}
      height={600}
      hasFooter={false}
    >
    <form ref={formRef} onSubmit = {handleSubmit(submitForm)}>


      
        <TextInputField
          label="Nom de l'article"
          control={control}
          isInvalid
          {...register('name',{required: 'field is required',maxLength: 20})}

        />

      {errors?.name?.type === "required" && <p>This field is required</p>}
      {errors?.name?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}

      <TextInputField
        label="code de l'article"
        control={control}
        isInvalid
        {...register('code',{required: 'field is required',maxLength: 20})}
      />
      {errors?.code?.type === "required" && <p>This field is required</p>}
      {errors?.code?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}

      <TextInputField
        label="quanité"
        type="number"
        control={control}
        isInvalid
        {...register('quantity',{required: 'field is required',min: 0})}
      />
      {errors?.quantity?.type === "required" && <p>This field is required</p>}
      {errors?.quantity?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}

      <TextInputField
        label="famille"
        control={control}
        isInvalid
        {...register('family',{required: 'field is required',maxLength: 30})}
      />
      {errors?.family?.type === "required" && <p>This field is required</p>}
      {errors?.family?.type === "maxLength" && (
        <p>First name cannot exceed 5 characters</p>
      )}

      <TextInputField
        label="unite"
        control={control}
        isInvalid
        {...register('unit',{required: 'field is required',maxLength: 30})}
      />
      {errors?.unit?.type === "required" && <p>This field is required</p>}
      {errors?.unit?.type === "maxLength" && (
        <p>First name cannot exceed 5 characters</p>
      )}

      
        <label className="" htmlFor="firstName">
            Image
          </label>
          <FilePond
              files={files}
              onupdatefiles={setFiles}
              required
              name = 'ArticleImage'
              labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
            />    
            <br/>
            <LinearProgress variant="determinate" value={progress} />
            <Typography  variant = "body2">
              {progress}%
            </Typography>
          
            <br />



      <Button  disabled={progress >0} type="submit" appearance="primary">
        Ajouter
      </Button>
  </form>
  </Dialog>
  )
}

export default AddArticle