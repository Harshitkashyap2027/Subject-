export interface Integration {
  name: string
  description: string
  category: string
  icon: string
  color: string
  popular: boolean
}

export const integrations: Integration[] = [
  { name: 'Google Workspace', description: 'Sync with Gmail, Drive, Calendar, and Meet', category: 'Productivity', icon: '🔵', color: 'from-blue-500 to-blue-700', popular: true },
  { name: 'Microsoft 365', description: 'Connect Outlook, Teams, SharePoint, and OneDrive', category: 'Productivity', icon: '🟦', color: 'from-indigo-500 to-blue-700', popular: true },
  { name: 'Slack', description: 'Send notifications and updates to Slack channels', category: 'Communication', icon: '🟣', color: 'from-purple-500 to-pink-600', popular: true },
  { name: 'Zoom', description: 'Schedule and join meetings directly from lvlBase', category: 'Communication', icon: '🔷', color: 'from-blue-400 to-blue-600', popular: true },
  { name: 'Salesforce', description: 'Sync customer and organization data with Salesforce CRM', category: 'CRM', icon: '☁️', color: 'from-sky-500 to-cyan-600', popular: false },
  { name: 'HubSpot', description: 'Connect marketing and sales workflows', category: 'CRM', icon: '🟠', color: 'from-orange-500 to-red-600', popular: false },
  { name: 'Stripe', description: 'Process payments and manage subscriptions', category: 'Payments', icon: '💳', color: 'from-violet-500 to-purple-700', popular: false },
  { name: 'GitHub', description: 'Link development workflows to projects and tasks', category: 'Development', icon: '⬛', color: 'from-gray-700 to-gray-900', popular: false },
  { name: 'Jira', description: 'Sync issues and sprints with lvlBase projects', category: 'Development', icon: '🔵', color: 'from-blue-600 to-indigo-700', popular: false },
  { name: 'Notion', description: 'Import and sync documentation and wikis', category: 'Documentation', icon: '⬜', color: 'from-gray-500 to-gray-700', popular: false },
  { name: 'Zapier', description: 'Connect with 6,000+ apps via automated workflows', category: 'Automation', icon: '⚡', color: 'from-orange-400 to-yellow-500', popular: true },
  { name: 'Webhooks', description: 'Custom webhooks for any external service', category: 'Developer', icon: '🔗', color: 'from-teal-500 to-emerald-600', popular: false },
]
