import { getDashboardData, getUserAccounts } from '@/actions/dashboard'
import CreateAccountDrawer from '@/components/create-account-drawer'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React from 'react'
import AccountCard from './_components/account-card'
import BudgetProgress from './_components/budget-progress'
import { getCurrentBudget } from '@/actions/budget'
import { DashboardOverview } from './_components/transaction-overview'

const DashboardPage = async() => {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);
  const defaultAccount = accounts?.find((account) => account.isDefault);
  // Get budget for default account
  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }
  return (
    <div className='space-y-8'>
        {/* Budget Progess */}
        {defaultAccount && <BudgetProgress
        initialBudget={budgetData?.budget}
        currentExpenses={budgetData?.currentExpenses || 0}/> }
        {/* Overview */}
        <DashboardOverview
        accounts={accounts}
        transactions={transactions || []}
      />
        {/* AccountGrid */}
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <CreateAccountDrawer>
            <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
              <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
                <Plus className='h-10 w-10 mb-2'></Plus>
                <p className="text-sm font-medium">Add New Account</p>
              </CardContent>
            </Card>
          </CreateAccountDrawer>

          {accounts.length>0 && accounts?.map((account)=>{
            return <AccountCard key={account.id} account={account}/>
          })}
        </div>
    </div>
  )
}

export default DashboardPage