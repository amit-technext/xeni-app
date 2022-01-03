// import React, { useState, useEffect } from 'react';
// import { Table, Button } from 'react-bootstrap';
// import SoftBadge from 'components/common/SoftBadge';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Modal } from 'react-bootstrap';
// import adminData from '../adminData';
// import ActionButton from 'components/common/ActionButton';
// import Flex from '../../common/Flex';
// import Avatar from 'components/common/Avatar';
// import FalconCloseButton from 'components/common/FalconCloseButton';
// export default function AssignmentBody() {
//   const [editData, setEditdata] = useState({});
//   const [editShow, setEditShow] = useState(false);
//   const [deleteShow, setDeleteShow] = useState(false);
//   const [show, setShow] = useState(false);
//   const editFile = (ok, data) => {
//     setEditShow(ok);
//     setEditdata(data);
//     console.log(data);
//   };
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [Data, setData] = useState(adminData[4].data);
//   const [DataSize, setDataSize] = useState(Data.length);
//   function callBackPCC() {
//     setEditShow(false);
//   }
//
//   console.log(DataSize);
//   const TableRow = ({ data }) => (
//     <tr className="align-middle">
//       <td className="text-nowrap">
//         <div className="d-flex align-items-center">
//           <div className="ms-2">{data.number}</div>
//         </div>
//       </td>
//       <td className="text-nowrap">
//         <div className="d-flex align-items-center">
//           <Avatar src={data.avatar} size="l" name={data.name} />
//           <div className="ms-2">
//             {data.name}
//             <div className="fs--2 text-info"></div>
//           </div>
//         </div>
//       </td>
//       <td className="text-nowrap">
//         <SoftBadge pill bg={data.status.type}>
//           <FontAwesomeIcon icon={data.status.icon} className="ms-2 me-2" />
//           {data.status.title}
//         </SoftBadge>
//       </td>
//       <td></td>
//       <td className="text-end">
//         <ActionButton
//           icon="edit"
//           title="Edit"
//           variant="action"
//           className="p-0"
//           onClick={() => editFile(true, data)}
//         />
//         |
//         <ActionButton
//           icon="ban"
//           title="Disable"
//           variant="action"
//           className="p-0"
//         />
//         |
//         <ActionButton
//           icon="trash-alt"
//           title="Delete"
//           variant="action"
//           className="p-0"
//           onClick={handleShow}
//         />
//       </td>
//
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header>
//           <Modal.Title>Delete</Modal.Title>
//           <FalconCloseButton onClick={handleClose} />
//         </Modal.Header>
//         <Modal.Body>Are you sure to delete this Assignement.</Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="secondary "
//             className="me-2 mb-1"
//             onClick={handleClose}
//           >
//             Yes
//           </Button>
//           <Button
//             className="me-2 mb-1 text-white bg-youtube"
//             onClick={handleClose}
//           >
//             No
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <Modal
//         size="lg"
//         show={editShow}
//         onHide={() => setEditShow(false)}
//         aria-labelledby="example-modal-sizes-title-lg"
//       >
//         <Modal.Header>
//           <Modal.Title id="example-modal-sizes-title-lg">Edit</Modal.Title>
//           <FalconCloseButton onClick={() => setEditShow(false)} />
//         </Modal.Header>
//         <Modal.Body>Edit AssigenmentPage section</Modal.Body>
//       </Modal>
//     </tr>
//   );
//
//   return (
//     <Flex direction="row" className="w-75 w-lg-60 mx-auto">
//       <div className="pe-5">
//         <Table responsive striped hover>
//           <thead>
//             <tr>
//               <th scope="col">Number</th>
//               <th scope="col">Name</th>
//               <th scope="col">Status</th>
//               <th scope="col"></th>
//               <th scope="col"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {Data.map((profile, index) =>
//               DataSize / 2 > index ? (
//                 <TableRow data={profile} key={index} />
//               ) : (
//                 ''
//               )
//             )}
//           </tbody>
//         </Table>
//       </div>
//       <div className="ps-5">
//         <Table responsive striped hover>
//           <thead>
//             <tr>
//               <th scope="col">Number</th>
//               <th scope="col">Name</th>
//               <th scope="col">Status</th>
//               <th scope="col"></th>
//               <th scope="col"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {Data.map((profile, index) =>
//               DataSize / 2 <= index ? (
//                 <TableRow data={profile} key={index} />
//               ) : (
//                 ''
//               )
//             )}
//           </tbody>
//         </Table>
//       </div>
//     </Flex>
//   );
// }
