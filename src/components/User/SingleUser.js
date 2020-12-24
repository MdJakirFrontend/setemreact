import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { VscEdit } from 'react-icons/vsc'
import UserModal from '../../utilities/UserModal/UserModal'
import EditKeyPlayerModal from '../../utilities/KeyPlayerModal/EditKeyPlayerModal'


export default class SingleUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalOpen: false
        }
    }

    handleModalOpen() {
        this.setState({
            modalOpen: true
        })
    }


    render() {
        let user = this.props.userObj
        return (
            <>
                <figure className={'userCard text-center px-3 py-5 mb-4'}>
                    {
                        user.userImgSrc ?
                            <img src={user.userImgSrc} alt={''} className={'img-fluid userImg'} />
                            : null
                    }
                    <h4 className={'user-name mt-4'}>
                        {user.userName ? user.userName : null}
                    </h4>
                    <p className={'user-designation'}>
                        {user.userDesignation ? user.userDesignation : null}
                    </p>
                    {
                        user.yearsOfExperience ?
                            <p className={'user-experience mt-3'} dangerouslySetInnerHTML={{
                                __html: `<svg id="Group_46" data-name="Group 46" xmlns="http://www.w3.org/2000/svg" width="14" height="13.125" viewBox="0 0 14 13.125">
                            <path id="Path_11" data-name="Path 11" d="M12.77,18.461H10.691v-.41A2.053,2.053,0,0,0,8.641,16H5.359a2.053,2.053,0,0,0-2.051,2.051v.41H1.23A1.232,1.232,0,0,0,0,19.691v8.2a1.232,1.232,0,0,0,1.23,1.23H12.77A1.232,1.232,0,0,0,14,27.895v-8.2A1.232,1.232,0,0,0,12.77,18.461Zm-8.641-.41a1.232,1.232,0,0,1,1.23-1.23H8.641a1.232,1.232,0,0,1,1.23,1.23v.41H4.129Zm9.051,9.844a.411.411,0,0,1-.41.41H1.23a.411.411,0,0,1-.41-.41v-.41H13.18Zm0-1.23H.82v-4.33A4.46,4.46,0,0,0,4.454,24.2H5.77v.41a.41.41,0,0,0,.41.41H7.82a.41.41,0,0,0,.41-.41V24.2H9.546a4.46,4.46,0,0,0,3.633-1.869ZM6.59,24.2v-.82h.82v.82Zm6.59-4.426a3.624,3.624,0,0,1-3.633,3.606H8.23v-.41a.41.41,0,0,0-.41-.41H6.18a.41.41,0,0,0-.41.41v.41H4.454A3.624,3.624,0,0,1,.82,19.777v-.085a.411.411,0,0,1,.41-.41H12.77a.411.411,0,0,1,.41.41Z" transform="translate(0 -16)" fill="#8d8d8d" />
                        </svg> &nbsp; ${user.yearsOfExperience}`
                            }} />
                            : null
                    }
                    {
                        user.phnNumber ?
                            <p className={'user-phnNumber'} dangerouslySetInnerHTML={{
                                __html: `${user.phnNumber}`
                            }} />
                            : null
                    }
                    <p className={'user-education'}>
                        {user.education ? user.education : null}
                    </p>
                    <p className={'user-mail'}>
                        <Link to={`mailto: ${user.userMail ? user.userMail : ''}`}> {user.userMail ? user.userMail : ''} </Link>
                    </p>
                    <p className={'user-role'}>
                        {user.userRole ? user.userRole : null}
                    </p>
                    <p className={'user-desc'}>
                        {user.userDesc ? user.userDesc : null}
                    </p>
                    <Button className={'btn-edit'} variant="light" onClick={this.handleModalOpen.bind(this)}>
                        <VscEdit size={'1rem'} />
                    </Button>
                    {user.userID && user.userMotive === 'edit-user' && this.state.modalOpen ? <UserModal id={user.userID} open={this.state.modalOpen} /> : null }
                    {user.userID && user.userMotive === 'edit-key-player' && this.state.modalOpen ? <EditKeyPlayerModal id={user.userID} open={this.state.modalOpen} /> : null}
                </figure>
            </>
        )
    }
}
