import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  URL_list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Recommended URLS" {...a11yProps(0)} />
          <Tab label="Process" {...a11yProps(1)} />
          <Tab label="MQP" {...a11yProps(2)} />
          <Tab label="About" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        The Recommended URL's for x:
      <div className={classes.URL_list}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.politifact.com/truth-o-meter/statements/2015/sep/23/donald-trump/hillary-clinton-obama-birther-fact-check/">
                http://www.politifact.com/truth-o-meter/statements/2015/sep/23/donald-trump/hillary-clinton-obama-birther-fact-check/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.factcheck.org/2015/06/where-does-clinton-foundation-money-go/">
                http://www.factcheck.org/2015/06/where-does-clinton-foundation-money-go/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.snopes.com/hillary-clinton-freed-child-rapist-laughed-about-it/">
                http://www.snopes.com/hillary-clinton-freed-child-rapist-laughed-about-it/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.snopes.com/hillary-clinton-blackface-photo/">
                http://www.snopes.com/hillary-clinton-blackface-photo/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.politifact.com/truth-o-meter/statements/2016/mar/02/ted-cruz/yes-donald-trump-has-been-linked-mob/">
                http://www.politifact.com/truth-o-meter/statements/2016/mar/02/ted-cruz/yes-donald-trump-has-been-linked-mob/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.politifact.com/truth-o-meter/lists/people/comparing-hillary-clinton-donald-trump-truth-o-met/">
                http://www.politifact.com/truth-o-meter/lists/people/comparing-hillary-clinton-donald-trump-truth-o-met/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.snopes.com/politics/clintons/zeifman.asp">
                http://www.snopes.com/politics/clintons/zeifman.asp
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.politifact.com/punditfact/statements/2016/nov/18/blog-posting/no-3-million-undocumented-immigrants-did-not-vote-/">
                http://www.politifact.com/punditfact/statements/2016/nov/18/blog-posting/no-3-million-undocumented-immigrants-did-not-vote-/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.factcheck.org/2015/07/was-hillary-clinton-the-original-birther/">
                http://www.factcheck.org/2015/07/was-hillary-clinton-the-original-birther/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.politifact.com/personalities/donald-trump/?platform=hootsuite">
                http://www.politifact.com/personalities/donald-trump/?platform=hootsuite
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.politifact.com/wisconsin/statements/2016/sep/30/donald-trump/nuclear-claim-donald-trump-says-hillary-clinton-ga/">
                http://www.politifact.com/wisconsin/statements/2016/sep/30/donald-trump/nuclear-claim-donald-trump-says-hillary-clinton-ga/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.snopes.com/alicia-machado-adult-star/">
                http://www.snopes.com/alicia-machado-adult-star/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.snopes.com/hillary-clinton-stupid-quote/">
                http://www.snopes.com/hillary-clinton-stupid-quote/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.politifact.com/truth-o-meter/statements/2015/oct/12/hillary-clinton/clinton-there-have-been-7-benghazi-probes-so-far/">
                http://www.politifact.com/truth-o-meter/statements/2015/oct/12/hillary-clinton/clinton-there-have-been-7-benghazi-probes-so-far/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.politifact.com/truth-o-meter/statements/2014/may/12/john-garamendi/prior-benghazi-were-there-13-attacks-embassies-and/">
              http://www.politifact.com/truth-o-meter/statements/2014/may/12/john-garamendi/prior-benghazi-were-there-13-attacks-embassies-and/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.politifact.com/punditfact/statements/2015/oct/01/viral-image/viral-image-wrongly-accuses-clinton-stealing/">
              http://www.politifact.com/punditfact/statements/2015/oct/01/viral-image/viral-image-wrongly-accuses-clinton-stealing/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.snopes.com/hillary-clinton-uranium-russia-deal/">
              http://www.snopes.com/hillary-clinton-uranium-russia-deal/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.politifact.com/personalities/donald-trump/statements/byruling/pants-fire/">
              http://www.politifact.com/personalities/donald-trump/statements/byruling/pants-fire/
            </Link>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>
            <Link href="http://www.politifact.com/personalities/donald-trump/statements/byruling/false">
              http://www.politifact.com/personalities/donald-trump/statements/byruling/false
            </Link>
            </ListItemText>
          </ListItem>
        </List>
      </div>
        


      </TabPanel>
      <TabPanel value={value} index={1}>
        We calculate the recommnded URLS based on ...
      </TabPanel>
      <TabPanel value={value} index={2}>
        The Goal of our MQP is ...
      </TabPanel>
      <TabPanel value={value} index={3}>
        This project is created by Alex and Alex ...
      </TabPanel>
    </div>
  );
}