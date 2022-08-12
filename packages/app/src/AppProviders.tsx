import React, { PropsWithChildren } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DimensionsProvider } from '@shared/hooks'
import { CombineProviders } from '@shared/utils'
import { I18nProvider } from '@shared/i18n'
import { ThemeProvider } from '@shared/theme'
import { KeyboardAvoidingViewProvider, SuspenseProvider, ToastProvider } from '@shared/components'

import NavigatorProvider from '@app/navigation/NavigatorProvider'
import AppProvider from '@app/AppProvider'

const AppProviders: React.FC<PropsWithChildren> = ({ children }) =>
  CombineProviders(
    [
      // order matters here, be careful!
      // if Provider A is using another Provider B, then A needs to appear below B.
      // (即外层组件放上面)
      SafeAreaProvider,
      DimensionsProvider, // uses: SafeAreaProvider
      SuspenseProvider,
      KeyboardAvoidingViewProvider,
      I18nProvider,
      ThemeProvider,
      ToastProvider,
      AppProvider, // uses: GizSDKProvider
      NavigatorProvider,
    ],
    children
  )

export default AppProviders
