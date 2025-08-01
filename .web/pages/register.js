/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { AlignJustifyIcon as LucideAlignJustifyIcon, GlobeIcon as LucideGlobeIcon, LayoutDashboardIcon as LucideLayoutDashboardIcon, LogOutIcon as LucideLogOutIcon, MailboxIcon as LucideMailboxIcon, MailIcon as LucideMailIcon, MenuIcon as LucideMenuIcon, MoonIcon as LucideMoonIcon, NewspaperIcon as LucideNewspaperIcon, SquareLibraryIcon as LucideSquareLibraryIcon, SunIcon as LucideSunIcon, TriangleAlertIcon as LucideTriangleAlertIcon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon, XIcon as LucideXIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Callout as RadixThemesCallout, Card as RadixThemesCard, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import NextLink from "next/link"
import { Drawer as VaulDrawer } from "vaul"
import theme from "$/utils/theme.js"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Fragment_f2f0916d2fcc08b7cdf76cec697f0750 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Div_602c14884fa2de27f522fe8f94374b02 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
  )
}

export function Errorboundary_33d8e57821e00f12af4e614b39b14e91 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<Fragment_9d3f3f326a3c748e3c8abe1acbb1c11c/>
<NextHead>

<title>

{"Register"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))




  
  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Fragment_9d3f3f326a3c748e3c8abe1acbb1c11c () {
  
  const reflex___state____state__reflex_local_auth___local_auth____local_auth_state = useContext(StateContexts.reflex___state____state__reflex_local_auth___local_auth____local_auth_state)
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const { resolvedColorMode } = useContext(ColorModeContext)
  const reflex___state____state__reflex_local_auth___local_auth____local_auth_state__full_stack_python___auth___state____session_state = useContext(StateContexts.reflex___state____state__reflex_local_auth___local_auth____local_auth_state__full_stack_python___auth___state____session_state)
  const ref_my_content_area_el = useRef(null); refs["ref_my_content_area_el"] = ref_my_content_area_el;
  const reflex___state____state__reflex_local_auth___local_auth____local_auth_state__reflex_local_auth___registration____registration_state = useContext(StateContexts.reflex___state____state__reflex_local_auth___local_auth____local_auth_state__reflex_local_auth___registration____registration_state)
  const ref_username = useRef(null); refs["ref_username"] = ref_username;
  const ref_email = useRef(null); refs["ref_email"] = ref_email;
  const ref_password = useRef(null); refs["ref_password"] = ref_password;
  const ref_confirm_password = useRef(null); refs["ref_confirm_password"] = ref_confirm_password;
  const ref_my_main_nav = useRef(null); refs["ref_my_main_nav"] = ref_my_main_nav;
  const ref_my_navbar_hstack_desktop = useRef(null); refs["ref_my_navbar_hstack_desktop"] = ref_my_navbar_hstack_desktop;

  
    const handleSubmit_1bc5ac03a610bc89ae573416292d6f2f = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({ ["password"] : getRefValue(refs["ref_password"]), ["email"] : getRefValue(refs["ref_email"]), ["confirm_password"] : getRefValue(refs["ref_confirm_password"]), ["username"] : getRefValue(refs["ref_username"]) })};

        (((...args) => (addEvents([(Event("reflex___state____state.reflex_local_auth___local_auth____local_auth_state.reflex_local_auth___registration____registration_state.full_stack_python___auth___state____my_register_state.handle_registration_email", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))());

        if (false) {
            $form.reset()
        }
    })
    




  
  return (
    <Fragment>

{isTrue(reflex___state____state__reflex_local_auth___local_auth____local_auth_state.is_authenticated) ? (
  <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesBox>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em", ["paddingTop"] : "1.5em", ["paddingBottom"] : "1.5em", ["background"] : "var(--accent-3)", ["height"] : "100vh", ["width"] : "16em" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["width"] : "100%" })} direction={"row"} justify={"start"} gap={"3"}>

<img css={({ ["width"] : "2.25em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/logo.jpg"}/>
<RadixThemesHeading size={"7"} weight={"bold"}>

{"Reflex"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"1"}>

<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Dashboard"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/articles"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideGlobeIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Articles"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/blog"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideNewspaperIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Blog"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/blog/add"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideSquareLibraryIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Create post"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/contact"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideMailIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Contact"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/contact/entries"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideMailboxIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Contact History"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"1"}>

<RadixThemesBox css={({ ["as"] : "button", ["underline"] : "none", ["weight"] : "medium", ["width"] : "100%" })} onClick={toggleColorMode}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["cursor"] : "pointer", ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["color"] : "var(--accent-11)", ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<Fragment>

{isTrue((resolvedColorMode === "light")) ? (
  <Fragment>

<LucideMoonIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideSunIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
<RadixThemesText as={"p"} size={"4"}>

{((resolvedColorMode === "light") ? "Turn dark mode on" : "Turn light mode on")}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["as"] : "button", ["underline"] : "none", ["weight"] : "medium", ["width"] : "100%" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.full_stack_python___navigation___state____nav_state.to_logout", ({  }), ({  })))], args, ({  }))))}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["cursor"] : "pointer", ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["color"] : "var(--accent-11)", ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideLogOutIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Logout"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesSeparator size={"4"}/>
<Fragment>

{isTrue(reflex___state____state__reflex_local_auth___local_auth____local_auth_state__full_stack_python___auth___state____session_state.authenticated_user_info) ? (
  <Fragment>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["width"] : "100%" })} direction={"row"} justify={"start"} gap={"3"}>

<RadixThemesIconButton css={({ ["padding"] : "6px" })} radius={"full"} size={"3"}>

<LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={36}/>
</RadixThemesIconButton>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"0"}>

<RadixThemesBox css={({ ["width"] : "100%" })}>

<RadixThemesText as={"p"} size={"3"} weight={"bold"}>

{(isTrue(reflex___state____state__reflex_local_auth___local_auth____local_auth_state__full_stack_python___auth___state____session_state.authenticated_username) ? reflex___state____state__reflex_local_auth___local_auth____local_auth_state__full_stack_python___auth___state____session_state.authenticated_username : "Account")}
</RadixThemesText>
<RadixThemesText as={"p"} size={"2"} weight={"medium"}>

{reflex___state____state__reflex_local_auth___local_auth____local_auth_state__full_stack_python___auth___state____session_state.authenticated_user_info?.["email"]}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>

{""}
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["padding"] : "1em", ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<VaulDrawer.Root direction={"left"}>

<VaulDrawer.Trigger asChild={true}>

<LucideAlignJustifyIcon css={({ ["color"] : "var(--current-color)" })} size={30}/>
</VaulDrawer.Trigger>
<VaulDrawer.Overlay css={({ ["position"] : "fixed", ["left"] : "0", ["right"] : "0", ["bottom"] : "0", ["top"] : "0", ["z_index"] : 50, ["background"] : "rgba(0, 0, 0, 0.5)", ["zIndex"] : "5" })}/>
<VaulDrawer.Portal css={({ ["width"] : "100%" })}>

<RadixThemesTheme css={{...theme.styles.global[':root'], ...theme.styles.global.body}}>

<VaulDrawer.Content css={({ ["left"] : "0", ["right"] : "auto", ["bottom"] : "0", ["top"] : "auto", ["position"] : "fixed", ["z_index"] : 50, ["display"] : "flex", ["height"] : "100%", ["width"] : "20em", ["padding"] : "1.5em", ["background"] : "var(--accent-2)" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesBox css={({ ["width"] : "100%" })}>

<VaulDrawer.Close asChild={true}>

<LucideXIcon css={({ ["color"] : "var(--current-color)" })} size={30}/>
</VaulDrawer.Close>
</RadixThemesBox>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"1"}>

<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Dashboard"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/articles"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideGlobeIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Articles"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/blog"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideNewspaperIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Blog"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/blog/add"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideSquareLibraryIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Create post"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/contact"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideMailIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Contact"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/contact/entries"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideMailboxIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Contact History"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"1"}>

<RadixThemesBox css={({ ["as"] : "button", ["underline"] : "none", ["weight"] : "medium", ["width"] : "100%" })} onClick={toggleColorMode}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["cursor"] : "pointer", ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["color"] : "var(--accent-11)", ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<Fragment>

{isTrue((resolvedColorMode === "light")) ? (
  <Fragment>

<LucideMoonIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideSunIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
<RadixThemesText as={"p"} size={"4"}>

{((resolvedColorMode === "light") ? "Turn dark mode on" : "Turn light mode on")}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["as"] : "button", ["underline"] : "none", ["weight"] : "medium", ["width"] : "100%" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.full_stack_python___navigation___state____nav_state.to_logout", ({  }), ({  })))], args, ({  }))))}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["cursor"] : "pointer", ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["color"] : "var(--accent-11)", ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideLogOutIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Logout"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesSeparator css={({ ["margin"] : "0" })} size={"4"}/>
<Fragment>

{isTrue(reflex___state____state__reflex_local_auth___local_auth____local_auth_state__full_stack_python___auth___state____session_state.authenticated_user_info) ? (
  <Fragment>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["width"] : "100%" })} direction={"row"} justify={"start"} gap={"3"}>

<RadixThemesIconButton css={({ ["padding"] : "6px" })} radius={"full"} size={"3"}>

<LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={36}/>
</RadixThemesIconButton>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"0"}>

<RadixThemesBox css={({ ["width"] : "100%" })}>

<RadixThemesText as={"p"} size={"3"} weight={"bold"}>

{(isTrue(reflex___state____state__reflex_local_auth___local_auth____local_auth_state__full_stack_python___auth___state____session_state.authenticated_username) ? reflex___state____state__reflex_local_auth___local_auth____local_auth_state__full_stack_python___auth___state____session_state.authenticated_username : "Account")}
</RadixThemesText>
<RadixThemesText as={"p"} size={"2"} weight={"medium"}>

{reflex___state____state__reflex_local_auth___local_auth____local_auth_state__full_stack_python___auth___state____session_state.authenticated_user_info?.["email"]}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>

{""}
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</VaulDrawer.Content>
</RadixThemesTheme>
</VaulDrawer.Portal>
</VaulDrawer.Root>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesBox css={({ ["padding"] : "1em", ["width"] : "100%" })} id={"my-content-area-el"} ref={ref_my_content_area_el}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["minHeight"] : "85vh" })}>

<Fragment>

{isTrue(reflex___state____state__reflex_local_auth___local_auth____local_auth_state__reflex_local_auth___registration____registration_state.success) ? (
  <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"}>

{"Registration successful!"}
</RadixThemesText>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>

<RadixThemesCard>

<RadixFormRoot className={"Root "} css={({ ["width"] : "100%" })} onSubmit={handleSubmit_1bc5ac03a610bc89ae573416292d6f2f}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["minWidth"] : "50vw" })} direction={"column"} gap={"3"}>

<RadixThemesHeading size={"7"}>

{"Create an account"}
</RadixThemesHeading>
<Fragment>

{isTrue(!((reflex___state____state__reflex_local_auth___local_auth____local_auth_state__reflex_local_auth___registration____registration_state.error_message === ""))) ? (
  <Fragment>

<RadixThemesCallout.Root color={"red"} css={({ ["icon"] : "triangle_alert", ["width"] : "" })} role={"alert"}>

<RadixThemesCallout.Icon>

<LucideTriangleAlertIcon css={({ ["color"] : "var(--current-color)" })}/>
</RadixThemesCallout.Icon>
<RadixThemesCallout.Text>

{reflex___state____state__reflex_local_auth___local_auth____local_auth_state__reflex_local_auth___registration____registration_state.error_message}
</RadixThemesCallout.Text>
</RadixThemesCallout.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
<RadixThemesText as={"p"}>

{"Username"}
</RadixThemesText>
<RadixThemesTextField.Root css={({ ["width"] : "100%" })} id={"username"} name={"username"} placeholder={"Username"} ref={ref_username}/>
<RadixThemesText as={"p"}>

{"Email"}
</RadixThemesText>
<RadixThemesTextField.Root css={({ ["width"] : "100%" })} id={"email"} name={"email"} placeholder={"Email"} ref={ref_email} type={"email"}/>
<RadixThemesText as={"p"}>

{"Password"}
</RadixThemesText>
<RadixThemesTextField.Root css={({ ["width"] : "100%" })} id={"password"} name={"password"} placeholder={"Password"} ref={ref_password} type={"password"}/>
<RadixThemesText as={"p"} css={({ ["type"] : "password" })}>

{"Confirm password"}
</RadixThemesText>
<RadixThemesTextField.Root css={({ ["width"] : "100%" })} id={"confirm_password"} name={"confirm_password"} placeholder={"Confirm Password"} ref={ref_confirm_password} type={"password"}/>
<RadixThemesButton css={({ ["width"] : "100%" })}>

{"Sign up"}
</RadixThemesButton>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<RadixThemesLink css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/login", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))}>

{"Login"}
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesCard>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} size={"3"}>

<NextLink href={"https://reflex.dev"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["textAlign"] : "center", ["padding"] : "1em" })} direction={"row"} gap={"3"}>

{"Built with "}
<svg css={({ ["viewBox"] : "0 0 56 12", ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") })} height={"12"} width={"56"} xmlns={"http://www.w3.org/2000/svg"}>

<path d={"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z"}/>
<path d={"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z"}/>
<path d={"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z"}/>
<path d={"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z"}/>
<path d={"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z"}/>
<path d={"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z"}/>
</svg>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>

<RadixThemesBox css={({ ["background"] : "var(--accent-3)", ["padding"] : "1em", ["width"] : "100%" })} id={"my-main-nav"} ref={ref_my_main_nav}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} id={"my-navbar-hstack-desktop"} justify={"between"} ref={ref_my_navbar_hstack_desktop} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<img css={({ ["width"] : "2.25em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/logo.jpg"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesHeading size={"7"} weight={"bold"}>

{"Reflex"}
</RadixThemesHeading>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"5"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesText as={"p"} size={"4"} weight={"medium"}>

{"Home"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/about"} passHref={true}>

<RadixThemesText as={"p"} size={"4"} weight={"medium"}>

{"About"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/articles"} passHref={true}>

<RadixThemesText as={"p"} size={"4"} weight={"medium"}>

{"Articles"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/pricing"} passHref={true}>

<RadixThemesText as={"p"} size={"4"} weight={"medium"}>

{"Pricing"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/contact"} passHref={true}>

<RadixThemesText as={"p"} size={"4"} weight={"medium"}>

{"Contact"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"end"} gap={"4"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/register"} passHref={true}>

<RadixThemesButton size={"3"} variant={"outline"}>

{"Register"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/login"} passHref={true}>

<RadixThemesButton size={"3"} variant={"outline"}>

{"Login"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<img css={({ ["width"] : "2em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/logo.jpg"}/>
<RadixThemesHeading size={"6"} weight={"bold"}>

{"Reflex"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesDropdownMenu.Root css={({ ["justify"] : "end" })}>

<RadixThemesDropdownMenu.Trigger>

<LucideMenuIcon css={({ ["color"] : "var(--current-color)" })} size={30}/>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content>

<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.full_stack_python___navigation___state____nav_state.to_home", ({  }), ({  })))], args, ({  }))))}>

{"Home"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.full_stack_python___navigation___state____nav_state.to_articles", ({  }), ({  })))], args, ({  }))))}>

{"Articles"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.full_stack_python___navigation___state____nav_state.to_blog", ({  }), ({  })))], args, ({  }))))}>

{"Blog"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.full_stack_python___navigation___state____nav_state.to_pricing", ({  }), ({  })))], args, ({  }))))}>

{"Pricing"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.full_stack_python___navigation___state____nav_state.to_contact", ({  }), ({  })))], args, ({  }))))}>

{"Contact"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Separator/>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.full_stack_python___navigation___state____nav_state.to_login", ({  }), ({  })))], args, ({  }))))}>

{"Log in"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.full_stack_python___navigation___state____nav_state.to_register", ({  }), ({  })))], args, ({  }))))}>

{"Register"}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesBox css={({ ["padding"] : "1em", ["width"] : "100%" })} id={"my-content-area-el"} ref={ref_my_content_area_el}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["minHeight"] : "85vh" })}>

<Fragment>

{isTrue(reflex___state____state__reflex_local_auth___local_auth____local_auth_state__reflex_local_auth___registration____registration_state.success) ? (
  <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"}>

{"Registration successful!"}
</RadixThemesText>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>

<RadixThemesCard>

<RadixFormRoot className={"Root "} css={({ ["width"] : "100%" })} onSubmit={handleSubmit_1bc5ac03a610bc89ae573416292d6f2f}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["minWidth"] : "50vw" })} direction={"column"} gap={"3"}>

<RadixThemesHeading size={"7"}>

{"Create an account"}
</RadixThemesHeading>
<Fragment>

{isTrue(!((reflex___state____state__reflex_local_auth___local_auth____local_auth_state__reflex_local_auth___registration____registration_state.error_message === ""))) ? (
  <Fragment>

<RadixThemesCallout.Root color={"red"} css={({ ["icon"] : "triangle_alert", ["width"] : "" })} role={"alert"}>

<RadixThemesCallout.Icon>

<LucideTriangleAlertIcon css={({ ["color"] : "var(--current-color)" })}/>
</RadixThemesCallout.Icon>
<RadixThemesCallout.Text>

{reflex___state____state__reflex_local_auth___local_auth____local_auth_state__reflex_local_auth___registration____registration_state.error_message}
</RadixThemesCallout.Text>
</RadixThemesCallout.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
<RadixThemesText as={"p"}>

{"Username"}
</RadixThemesText>
<RadixThemesTextField.Root css={({ ["width"] : "100%" })} id={"username"} name={"username"} placeholder={"Username"} ref={ref_username}/>
<RadixThemesText as={"p"}>

{"Email"}
</RadixThemesText>
<RadixThemesTextField.Root css={({ ["width"] : "100%" })} id={"email"} name={"email"} placeholder={"Email"} ref={ref_email} type={"email"}/>
<RadixThemesText as={"p"}>

{"Password"}
</RadixThemesText>
<RadixThemesTextField.Root css={({ ["width"] : "100%" })} id={"password"} name={"password"} placeholder={"Password"} ref={ref_password} type={"password"}/>
<RadixThemesText as={"p"} css={({ ["type"] : "password" })}>

{"Confirm password"}
</RadixThemesText>
<RadixThemesTextField.Root css={({ ["width"] : "100%" })} id={"confirm_password"} name={"confirm_password"} placeholder={"Confirm Password"} ref={ref_confirm_password} type={"password"}/>
<RadixThemesButton css={({ ["width"] : "100%" })}>

{"Sign up"}
</RadixThemesButton>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<RadixThemesLink css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/login", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))}>

{"Login"}
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
</RadixThemesCard>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} size={"3"}>

<NextLink href={"https://reflex.dev"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["textAlign"] : "center", ["padding"] : "1em" })} direction={"row"} gap={"3"}>

{"Built with "}
<svg css={({ ["viewBox"] : "0 0 56 12", ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") })} height={"12"} width={"56"} xmlns={"http://www.w3.org/2000/svg"}>

<path d={"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z"}/>
<path d={"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z"}/>
<path d={"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z"}/>
<path d={"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z"}/>
<path d={"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z"}/>
<path d={"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z"}/>
</svg>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesIconButton css={({ ["padding"] : "6px", ["position"] : "fixed", ["bottom"] : "2rem", ["left"] : "2rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) })} onClick={toggleColorMode}>

<Fragment>

{isTrue((resolvedColorMode === "light")) ? (
  <Fragment>

<LucideSunIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideMoonIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
</RadixThemesIconButton>
</Fragment>
)}
</Fragment>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_33d8e57821e00f12af4e614b39b14e91/>
  )
}
