import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { takeLatest, put, call } from 'redux-saga/effects'

import userActionTypes, { UserActionTypes } from './user.types'
import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure,
} from './user.action'

import {
    auth,
    googleProvider,
    createUserProfileDocument,
    getCurrentUser
} from '../../firebase/firebase.utils'

import {
    getSnapshotFromUserAuth,
    signInWithGoogle,
    signInWithEmail,
    isUserAuthenticated,
    signOut,
    signUp,
    signInafterSignUp,
    onGoogleSignInStart,
    onEmailSignInStart,
    onCheckUSerSession,
    onSignOutStart,
    onSignUpStart,
    onSignUpSuccess
} from './user.sagas'

configure({ adapter: new Adapter })

describe('on signup success saga', () => {
    it('should trigger on SIGN_UP_SUCCESS', () => {
        const generator = onSignUpSuccess()
        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInafterSignUp)
        )
    })
})

describe('on signup start saga', () => {
    it('should trigger on SIGN_UP_START', () => {
        const generator = onSignUpStart()
        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.SIGN_UP_START, signUp)
        )
    })
})

describe('on signout start saga', () => {
    it('should trigger on SIGN_OUT_START', () => {
        const generator = onSignOutStart()
        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
        )
    })
})

describe('on onCheck user session saga', () => {
    it('should trigger on CHECK_USER_SAGA', () => {
        const generator = onCheckUSerSession()
        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
        )
    })
})

describe('on email sign in start saga', () => {
    it('should trigger on EMAIL_SIGN_IN_START', () => {
        const generator = onEmailSignInStart()
        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
        )
    })
})

describe('on google sign in start saga', () => {
    it('should trigger on GOOGLE_SIGN_IN_START', () => {
        const generator = onGoogleSignInStart()
        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
        )
    })
})

describe('on sign in after sign up saga', () => {
    it('should trigger on getSnapshotFromAuth', () => {
        const mockUser = {}
        const mockAdditionalData = {}
        const mockAction = {
            payload: {
                user: mockUser,
                additionalData: mockAdditionalData
            }
        }

        const generator = signInafterSignUp(mockAction)
        expect(generator.next().value).toEqual(
            getSnapshotFromUserAuth(mockUser, mockAdditionalData)
        ) 
    })
})

describe('on signup saga', () => {
    const mockEmail = 'ardi@gmail.com'
    const mockPassword = 'test1234'
    const mockDisplayName = 'ardi'
    
    const mockAction = {
        payload: {
            email: mockEmail,
            password: mockPassword,
            displayName: mockDisplayName
        }
    }

    const generator = signUp(mockAction)

    it('should call auth.createUserWithEmailAndPassword', () => {
        const createUserWithEmailAndPassword = jest.spyOn(
            auth,
            'createUserWithEmailAndPassword'
        )
        generator.next()
        expect(createUserWithEmailAndPassword).toHaveBeenCalled()
    })
})

describe('on signout saga', () => {
    const generator = signOut()

    it('should call auth.signOut', () => {
        const expectSignOut = jest.spyOn(auth, 'signOut')
        generator.next()
        expect(expectSignOut).toHaveBeenCalled()
    })

    it('should call signOutSuccess', () => {
        expect(generator.next().value).toEqual(put(signOutSuccess()))
    })

    it('should call signOutFailure', () => {
        const newGenerator = signOut()
        newGenerator.next()
        expect(newGenerator.throw('error').value).toEqual(
            put(signOutFailure('error'))
        )
    })
})

describe('is user authenticated saga', () => {
    const generator = isUserAuthenticated()

    it('should call getCurrentUser', () => {
        expect(generator.next().value).toEqual(getCurrentUser())
    })

    it('should call getSnapshotFromUserAuth if userAuth exists', () => {
        const mockUserAuth = { uid: '123da' }
        expect(generator.next(mockUserAuth).value).toEqual(
            getSnapshotFromUserAuth(mockUserAuth)
        )
    })

    it('should call signInFailure on error', () => {
        const newGenerator = isUserAuthenticated()
        newGenerator.next()
        expect(newGenerator.throw('error').value).toEqual(
            put(signInFailure('error'))
        )
    })
})

describe('get snapshot from userAuth', () => {
    const mockUserAuth = {}
    const mockAdditionalData = {}
    const generator = getSnapshotFromUserAuth(mockUserAuth, mockAdditionalData)

    expect(generator.next().value).toEqual(
        call(createUserProfileDocument, mockUserAuth, mockAdditionalData)
    )
})





