import React from 'react';
import { createStyles, Theme, WithStyles, withStyles, lighten } from '@material-ui/core/styles';
import { Card, CardContent, Typography, AppBar, Tabs, Tab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from './TabPanel';
import TagChip from './TagChip';
import { RecipeInfo } from '../Types/RecipeInfo';

const useStyles = (theme: Theme) => createStyles({
    "recipeCard": {
        display: "flex",
        margin: "2vw",
        width: "inherit",
        minHeight:0,
        flex: '1 1 auto'
    },
    "content": {
        display: "flex",
        minHeight:0,
        flex: '1 1 auto',
        flexDirection: "column",
        padding: "inherit",
        "&:last-child": {
            paddingBottom: 0
        }
    },
    "overview": {
        margin: theme.spacing(2.5),
        marginBottom: 0
    },
    "tabNavContainer": {
        margin: theme.spacing(2.5),
        marginTop: theme.spacing(2),
        minHeight:0,
        flexGrow: 1
    },
    "tabNavCard": {
        height: "100%",
        display: 'flex',
        minHeight:0,
        backgroundColor: lighten(theme.palette.background.paper, 0.10)
    },
    "tabRoot": {
        backgroundColor: lighten(theme.palette.background.paper, 0.10),
        width: "100%",
        flex: '1 1 auto',
        minHeight:0,
        flexDirection: 'column',
        display: 'flex'
    },
    "tabCardHeader": {
        backgroundColor: theme.palette.background.default,
    },
    "tabContent": {
        height: "100%",
        flex: '1 1 auto',
        overflow: "auto"
    },
    "tag": {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    "resultImg":{
        minWidth:0,
        width:"100%",
        height: "auto",
        marginBottom:theme.spacing(1.5),
        boxShadow: theme.shadows[1],
        borderRadius: "4px",
    },
    "swipeableZone":{
        height:"100%",
    },
    "list":{
        "&:not(:last-child)":{
            marginBottom: theme.spacing(1),
        },
    },
});

interface RecipeProps extends RecipeInfo<WithStyles<typeof useStyles, true>> {
    invalid?: boolean;
};
interface RecipeState {
    currentTab: number;
}

class RecipeSmallScreen extends React.Component<RecipeProps, RecipeState>{
    private classes: Record<keyof ReturnType<typeof useStyles>, string>;
    private theme: Theme;
    constructor(props: RecipeProps) {
        super(props);
        this.classes = this.props.classes;
        this.theme = this.props.theme;
        this.state = { currentTab: 0 };
    }
    a11yProps(index: number) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }
    handleTabChange(event: React.ChangeEvent<{}>, newValue: number) {
        this.setState({ ...this.state, currentTab: newValue });
    }
    handleTabChangeIndex(newIndex: number) {
        this.setState({ ...this.state, currentTab: newIndex });
    }
    render() {
        if(this.props.invalid){
            return(
                <Card className={this.classes.recipeCard}>
                <CardContent className={this.classes.content}>
                    <div className={this.classes.overview}>
                        <Typography variant="h4">Recipe Not Found</Typography>
                    </div>
                </CardContent>
            </Card>
            );
        }
        return (
            //Mobile
            <Card className={this.classes.recipeCard}>
                <CardContent className={this.classes.content}>
                    <div className={this.classes.overview}>
                        <Typography variant="h4">{this.props.title}</Typography>
                    </div>
                    <div className={this.classes.tabNavContainer}>
                        <Card className={this.classes.tabNavCard}>

                            <div className={this.classes.tabRoot}>
                                <AppBar position="static" className={this.classes.tabCardHeader}>
                                    <Tabs
                                        value={this.state.currentTab}
                                        onChange={this.handleTabChange.bind(this)}
                                        indicatorColor="secondary"
                                        textColor="secondary"
                                        variant="fullWidth"
                                        aria-label="Tabs"
                                    >
                                        <Tab label="Overview" {...this.a11yProps(0)} />
                                        <Tab label="Ingredients" {...this.a11yProps(1)} />
                                        <Tab label="Steps" {...this.a11yProps(2)} />
                                    </Tabs>
                                </AppBar>
                                <CardContent className={this.classes.tabContent}>
                                    <SwipeableViews
                                        className={this.classes.swipeableZone}
                                        axis={this.theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                        index={this.state.currentTab}
                                        onChangeIndex={this.handleTabChangeIndex.bind(this)}
                                    >
                                        <TabPanel value={this.state.currentTab} index={0} dir={this.theme.direction}>
                                        <img className={this.classes.resultImg} src={this.props.resultImg} alt={this.props.title+".png"}/>
                                            <Typography>{this.props.summary}</Typography>
                                            <div>
                                                {this.props.tags.map((tag,i) => {
                                                    return <TagChip variant="link" label={tag} key={i} link={`/recipes?tags=${tag}`} className={this.classes.tag} />
                                                })}
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={this.state.currentTab} index={1} dir={this.theme.direction}>
                                            <ul>
                                                {this.props.ingredients.map((ingredient, key) => {
                                                    return (<Typography component="li" className={this.classes.list} key={key}>{ingredient}</Typography>);
                                                })}
                                            </ul>
                                        </TabPanel>
                                        <TabPanel value={this.state.currentTab} index={2} dir={this.theme.direction}>
                                            <ol>
                                                {this.props.steps.map((step, key) => {
                                                    return (<Typography component="li" className={this.classes.list} key={key}>{step}</Typography>);
                                                })}
                                            </ol>
                                        </TabPanel>
                                    </SwipeableViews>
                                </CardContent>
                            </div>

                        </Card>
                    </div>
                </CardContent>
            </Card>
        );
    }
}
export default withStyles(useStyles, { withTheme: true })(RecipeSmallScreen);