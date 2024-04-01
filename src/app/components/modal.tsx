"use client";

import { Button, Checkbox, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import ButtonComponent from "./button";

interface EditDetailDoorModalProps {
    openModal: any;
    onCloseModal: any;
}

interface AddUserDoorModalProps {
    openModal: any;
    onCloseModal: any;
}

export default function EditDetailDoorModal(props: EditDetailDoorModalProps) {
    const { openModal } = props;
    const { onCloseModal } = props;

    return (
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Edit Detail</h3>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Id" />
                        </div>
                        <TextInput
                            placeholder="111"
                            disabled
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Name" />
                        </div>
                        <TextInput
                            value={"Pintu Syurga"}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Location" />
                        </div>
                        <TextInput
                            value={"Floor 7"}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Class Name" />
                        </div>
                        <TextInput
                            value={"LPR 8"}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Description" />
                        </div>
                        <Textarea
                            value={"Heaven Floor, be afraid of god, do the right thing to do"}
                        />
                    </div>
                    <div className="w-full">
                        <div className="mt-6">
                            <ButtonComponent text="Save Changes" color="greenFill" />
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export function AddUserDoorModal(props: AddUserDoorModalProps) {
    const { openModal } = props;
    const { onCloseModal } = props;

    return (
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Edit Detail</h3>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Id User" />
                        </div>
                        <TextInput id="iduser"/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Name" />
                        </div>
                        <TextInput id="name"/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Status" />
                        </div>
                        <TextInput id="status"/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Email" />
                        </div>
                        <TextInput id="email"/>
                    </div>
                    <div className="w-full">
                        <div className="mt-6">
                            <ButtonComponent text="Add User" color="greenFill" />
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}