import { Dialog, Transition } from "@headlessui/react"
import { useState, Fragment, useCallback, useRef } from "react"
import { PencilIcon, PlusSmallIcon } from "@heroicons/react/24/outline"
import { useDropzone } from "react-dropzone"
import Image from "next/image"
import { Form, Formik } from "formik"
import toast from "react-hot-toast"

import { IconsSm, IconsXs } from "components/Icons"
import { useMouseLeave } from "hooks/useMouseLeave"
import { FieldInput } from "components/Input/FieldInput"
import { AddOrEditModalProps } from "interfaces"

const AddOrEditModal = ({
  row,
  addRow,
  editRow,
  type,
  option,
}: AddOrEditModalProps) => {
  const modalRef = useRef(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [images, setImages] = useState<(string | ArrayBuffer | null)[]>([])
  const values =
    type === "product"
      ? {
          title: row?.values?.title || "",
          description: row?.values?.description || "",
          price: row?.values?.price || "",
          image: row?.values?.image || "",
          category: row?.values?.category || "",
          gen: row?.values?.gen || "",
        }
      : {
          name: row?.values?.name || "",
        }

  useMouseLeave(modalRef, setIsOpen)
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles &&
      acceptedFiles.forEach((file: any) => {
        const reader = new FileReader()
        reader.onload = () => {
          setImages((prev) => [...prev, reader.result])
        }
        reader.readAsDataURL(file)
      })
  }, [])
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 10,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  })

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  let body: JSX.Element
  if (type === "product") {
    body = (
      <>
        <FieldInput name="title" placeholder="Titulo..." />
        <FieldInput
          name="description"
          placeholder="Descripcion..."
          as="textarea"
        />
        <FieldInput name="price" placeholder="Precio..." type="number" />

        <div className="flex space-x-5">
          <FieldInput label="Hombre" name="gen" value="man" type="radio" />
          <FieldInput label="Mujer" name="gen" value="woman" type="radio" />
        </div>

        <FieldInput name="category" as="select">
          <option value="Remera">Remera</option>
          <option value="Buzo">Buzo</option>
          <option value="Campera">Campera</option>
          <option value="Pantalon">Pantalon</option>
        </FieldInput>
      </>
    )
  } else if (type === "user") {
    body = (
      <>
        <FieldInput name="name" placeholder="Nombre..." />
        <FieldInput name="email" placeholder="Email..." />
      </>
    )
  }

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center justify-center rounded-full bg-gray-200 bg-opacity-70 px-3 py-1 dark:bg-gray-700"
      >
        {option === "edit" ? (
          <>
            <IconsXs Icon={PencilIcon} />
            <h3 className="ml-1 font-semibold">Editar</h3>
          </>
        ) : (
          <IconsSm Icon={PlusSmallIcon} props="dark:text-white text-black" />
        )}
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
            <section className="relative grid h-full w-full place-content-center">
              <div
                ref={modalRef}
                className="h-max w-[80vw] rounded-md border border-gray-100 bg-white p-3 dark:border-gray-800 dark:bg-gray-800"
              >
                <Formik
                  initialValues={values}
                  onSubmit={(values) => {
                    if (option === "edit") {
                      toast.success("Producto Editado")
                      editRow!({ id: row!.values.id, ...images, ...values })
                    } else {
                      toast.success("Producto Agregado")
                      addRow!({
                        id: Math.floor((Math.random() * 10) / 0.2),
                        ...images,
                        ...values,
                      })
                    }

                    setImages([])
                  }}
                >
                  {() => (
                    <Form className="flex w-full flex-col">
                      <h1 className="mb-3 text-center text-xl">
                        {option === "edit" ? "Edita" : "Agrega"} un{" "}
                        {type === "product" ? "producto" : "usuario"}
                      </h1>
                      <div className="flex space-x-5">
                        <div className="w-2/4">
                          <div
                            className="h-52 w-full cursor-pointer bg-gray-200 dark:bg-gray-600"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <div className="flex h-full flex-col items-center justify-center">
                              {/* <IconCustom
                            Icon={UploadIcon}
                            props="w-32 h-32 text-gray-500 fill-current"
                          /> */}
                              <p className="font-bold text-gray-500">
                                Hace click o arrastra imagenes
                              </p>
                            </div>
                          </div>
                          <div className="mt-3 flex space-x-3">
                            {images.length !== 0 &&
                              images.map((v, i) => (
                                <Image
                                  key={i}
                                  width={120}
                                  height={120}
                                  src={v}
                                  alt="Product image"
                                />
                              ))}
                          </div>
                        </div>
                        <div className="flex w-2/4 flex-col space-y-5">
                          {body}

                          <button
                            type="submit"
                            className="cursor-pointer rounded-md bg-black py-2 text-white dark:bg-gray-600"
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </section>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export { AddOrEditModal }
