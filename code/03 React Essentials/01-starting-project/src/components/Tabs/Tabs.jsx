function Tabs({ children, buttons, buttonContainer }) {
    const ButtonContainer = buttonContainer;

    return (
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            {children}
        </>
    )
}

export default Tabs;