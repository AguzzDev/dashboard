import { Dialog, Transition } from "@headlessui/react"
import { useState, Fragment, useCallback, useRef } from "react"
import { IconCustom, IconsSm } from "components/Icons"
import { PlusSmIcon, UploadIcon } from "@heroicons/react/outline"
import { useDropzone } from "react-dropzone"
import Image from "next/image"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useMouseLeave } from "hooks/useMouseLeave"
import useTable from "hooks/useTable"

const Modal = ({ row }) => {
  const modalRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState([])

  const { addRow } = useTable()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: row?.values?.title,
      description: row?.values?.description,
      price: row?.values?.price,
      image: row?.values?.image,
      category: row?.values?.category,
      gen: row?.values?.gen,
    },
  })
  useMouseLeave(modalRef, setIsOpen)
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles &&
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()
        reader.onload = () => {
          setImages(reader.result)
        }
        reader.readAsDataURL(file)
      })
  }, [])
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 10,
    accept: "image/jpeg, image/png",
  })

  const onSubmit = (data) => {
    toast.success("Producto Añadido")
    const newData = [data].map((data, i) => {
      return {
        id: i,
        image: images,
        category: data.category,
        description: data.description,
        gen: data.gen,
        price: data.price,
        title: data.title,
      }
    })

    addRow(newData)
    reset()
    setImages([])
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button onClick={openModal}>
        <IconsSm Icon={PlusSmIcon} props="dark:text-white text-black" />
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          open={isOpen}
          onClose={closeModal}
          className="fixed inset-0 z-50 flex"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="pointer-events-none fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            leave="transition ease-in-out duration-300 transform"
          >
            <section className="w-full h-full relative grid place-content-center">
              <div
                ref={modalRef}
                className="border dark:border-gray-800 border-gray-100 bg-white dark:bg-gray-800 w-[80vw] h-max rounded-md p-3"
              >
                <form
                  className="flex flex-col w-full"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <h1 className="text-xl text-center mb-3">
                    Agrega un producto
                  </h1>
                  <div className="flex space-x-5">
                    <div className="w-2/4">
                      <div
                        className="dark:bg-gray-600 bg-gray-200 h-52 w-full cursor-pointer"
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <div className="flex flex-col justify-center items-center h-full">
                          <IconCustom
                            Icon={UploadIcon}
                            props="w-32 h-32 text-gray-500 fill-current"
                          />
                          <p className="font-bold text-gray-500">
                            Hace click o arrastra imagenes
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-3 mt-3">
                        {images.length !== 0 && (
                          <Image
                            width={120}
                            height={120}
                            objectFit="cover"
                            src={images}
                            className="cursor-pointer"
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-5 w-2/4">
                      <input
                        className="px-3 py-1"
                        {...register("title", { required: true })}
                        placeholder="Producto"
                      />
                      <textarea
                        className="px-3 py-1 outline-none"
                        rows="4"
                        {...register("description", { required: true })}
                        placeholder="Agrega una descripcion"
                      />
                      <input
                        className="px-3 py-1"
                        type="number"
                        {...register("price", { required: true })}
                        placeholder="Precio"
                      />
                      <div className="flex space-x-5">
                        <div>
                          <label>Hombre</label>
                          <input
                            className="ml-3"
                            value="man"
                            type="radio"
                            {...register("gen", { required: true })}
                          />
                        </div>
                        <div>
                          <label>Mujer</label>
                          <input
                            className="ml-3"
                            value="woman"
                            type="radio"
                            {...register("gen", { required: true })}
                          />
                        </div>
                      </div>
                      <select
                        className="px-3 py-1"
                        {...register("category", { required: true })}
                      >
                        <option value="Remera">Remera</option>
                        <option value="Buzo">Buzo</option>
                        <option value="Campera">Campera</option>
                        <option value="Pantalon">Pantalon</option>
                      </select>
                      {errors.title?.type === "required"
                        ? "Campo requerido"
                        : errors.description?.type === "required"
                        ? "Campo requerido"
                        : errors.price?.type === "required"
                        ? "Campo requerido"
                        : errors.gen?.type === "required"
                        ? "Campo requerido"
                        : ""}
                      <input
                        className="py-2 bg-black dark:bg-gray-600 text-white rounded-md cursor-pointer"
                        type="submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export { Modal }
